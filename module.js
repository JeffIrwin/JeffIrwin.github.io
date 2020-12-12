
//import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkOpenGLRenderWindow from 'vtk.js/Sources/Rendering/OpenGL/RenderWindow';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
import vtkRenderWindowInteractor from 'vtk.js/Sources/Rendering/Core/RenderWindowInteractor';
import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
import vtkInteractorStyleTrackballCamera from 'vtk.js/Sources/Interaction/Style/InteractorStyleTrackballCamera';
import vtkOrientationMarkerWidget from 'vtk.js/Sources/Interaction/Widgets/OrientationMarkerWidget';
import vtkAnnotatedCubeActor from 'vtk.js/Sources/Rendering/Core/AnnotatedCubeActor';

function moduleFunc()
{
	console.log("JavaScript go brr");

	// ----------------------------------------------------------------------------
	// Standard rendering code setup, from:
	//
	//     https://kitware.github.io/vtk-js/examples/OrientationMarkerWidget.html
	//
	// ----------------------------------------------------------------------------
	
	const renderer = vtkRenderer.newInstance({ background: [0.2, 0.3, 0.4] });
	const renderWindow = vtkRenderWindow.newInstance();
	renderWindow.addRenderer(renderer);
	
	// ----------------------------------------------------------------------------
	// Example code
	// ----------------------------------------------------------------------------
	
	// create cone
	const coneSource = vtkConeSource.newInstance();
	const actor = vtkActor.newInstance();
	const mapper = vtkMapper.newInstance();
	
	actor.setMapper(mapper);
	mapper.setInputConnection(coneSource.getOutputPort());
	
	renderer.addActor(actor);
	
	// create axes
	const axes = vtkAnnotatedCubeActor.newInstance();
	axes.setDefaultStyle({
	  text: '+X',
	  fontStyle: 'bold',
	  fontFamily: 'Arial',
	  fontColor: 'black',
	  fontSizeScale: (res) => res / 2,
	  faceColor: '#0000ff',
	  faceRotation: 0,
	  edgeThickness: 0.1,
	  edgeColor: 'black',
	  resolution: 400,
	});
	// axes.setXPlusFaceProperty({ text: '+X' });
	axes.setXMinusFaceProperty({
	  text: '-X',
	  faceColor: '#ffff00',
	  faceRotation: 90,
	  fontStyle: 'italic',
	});
	axes.setYPlusFaceProperty({
	  text: '+Y',
	  faceColor: '#00ff00',
	  fontSizeScale: (res) => res / 4,
	});
	axes.setYMinusFaceProperty({
	  text: '-Y',
	  faceColor: '#00ffff',
	  fontColor: 'white',
	});
	axes.setZPlusFaceProperty({
	  text: '+Z',
	  edgeColor: 'yellow',
	});
	axes.setZMinusFaceProperty({ text: '-Z', faceRotation: 45, edgeThickness: 0 });
	
	renderer.resetCamera();

	// Use OpenGL as the backend to view the all this
	const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
	renderWindow.addView(openglRenderWindow);

	// Put the render window inside of a div from the HTML
	const container = document.getElementById("vtkDiv");
	openglRenderWindow.setContainer(container);

	// Capture size of the container and set the resolution
	const { width, height } = container.getBoundingClientRect();
	const f = 2;  // larger f == finer resolution
	openglRenderWindow.setSize(f * width, f * height);

	// Setup an interactor to handle mouse events
	const interactor = vtkRenderWindowInteractor.newInstance();
	interactor.setView(openglRenderWindow);
	interactor.initialize();
	interactor.bindEvents(container);

	// Setup interactor style to use
	interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());
	
	// create orientation widget
	const orientationWidget = vtkOrientationMarkerWidget.newInstance({
	  actor: axes,
	  interactor: renderWindow.getInteractor(),
	});
	orientationWidget.setEnabled(true);
	orientationWidget.setViewportCorner(
	  vtkOrientationMarkerWidget.Corners.BOTTOM_RIGHT
	);
	orientationWidget.setViewportSize(0.15);
	orientationWidget.setMinPixelSize(100);
	orientationWidget.setMaxPixelSize(300);

	renderWindow.render();

}

export default
{
	moduleFunc
}

