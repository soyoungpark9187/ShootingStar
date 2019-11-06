var gl;

var colors = [];
var numVertices = 183;
var moving = 0.0;
var tmp = [];
var points = [];
var delay = 100;

var smoke_flag = 0;


window.onload = function init() {
	function setVertices() {
		var vertex = new Float32Array([

	        //// stars ////
	        -0.9, 0.9, 0.0, 1.0, -0.7, 0.9, 0.0, 1.0, -0.8, 0.75, 0.0, 1.0,
	        -0.9, 0.8, 0.0, 1.0, -0.7, 0.8, 0.0, 1.0, -0.8, 0.95, 0.0, 1.0,

	        -0.7, 0.65, 0.0, 1.0, -0.6, 0.65, 0.0, 1.0, -0.65, 0.725, 0.0, 1.0,
	        -0.7, 0.7, 0.0, 1.0, -0.6, 0.7, 0.0, 1.0, -0.65, 0.625, 0.0, 1.0,

	        0.7, 0.65, 0.0, 1.0, 0.6, 0.65, 0.0, 1.0, 0.65, 0.725, 0.0, 1.0,
	        0.7, 0.7, 0.0, 1.0, 0.6, 0.7, 0.0, 1.0, 0.65, 0.625, 0.0, 1.0,

	        0.85, 0.85, 0.0, 1.0, 0.75, 0.85, 0.0, 1.0, 0.8, 0.925, 0.0, 1.0,
	        0.85, 0.9, 0.0, 1.0, 0.75, 0.9, 0.0, 1.0, 0.8, 0.825, 0.0, 1.0,


	        -0.375, -0.475, 0.0, 1.0, -0.375, -0.525, 0.0, 1.0, -0.325, -0.475, 0.0, 1.0, // ball1
	        -0.325, -0.525, 0.0, 1.0, -0.375, -0.525, 0.0, 1.0, -0.325, -0.475, 0.0, 1.0,

	        -0.25, -0.475, 0.0, 1.0, -0.2, -0.475, 0.0, 1.0, -0.25, -0.525, 0.0, 1.0, // ball2
	        -0.25, -0.525, 0.0, 1.0, -0.2, -0.475, 0.0, 1.0, -0.2, -0.525, 0.0, 1.0,

	        -0.25, -0.6, 0.0, 1.0, -0.25, -0.65, 0.0, 1.0, -0.2, -0.6, 0.0, 1.0,// ball3
	        -0.2, -0.65, 0.0, 1.0, -0.25, -0.65, 0.0, 1.0, -0.2, -0.6, 0.0, 1.0,

	        -0.375, -0.6, 0.0, 1.0, -0.375, -0.65, 0.0, 1.0, -0.325, -0.6, 0.0, 1.0,// ball4
	        -0.325, -0.65, 0.0, 1.0, -0.375, -0.65, 0.0, 1.0, -0.325, -0.6, 0.0, 1.0,

	        -0.375, -0.55, 0.0, 1.0, -0.325, -0.55, 0.0, 1.0, -0.375, -0.6, 0.0, 1.0,// lease1
	        -0.375, -0.6, 0.0, 1.0, -0.325, -0.55, 0.0, 1.0, -0.325, -0.6, 0.0, 1.0,

	        -0.3, -0.6, 0.0, 1.0, -0.3, -0.65, 0.0, 1.0, -0.25, -0.6, 0.0, 1.0,// lease2
	        -0.25, -0.65, 0.0, 1.0, -0.3, -0.65, 0.0, 1.0, -0.25, -0.6, 0.0, 1.0,

	        -0.325, -0.6, 0.0, 1.0, -0.325, -0.65, 0.0, 1.0, -0.275, -0.6, 0.0, 1.0, // lease3
	        -0.275, -0.65, 0.0, 1.0, -0.325, -0.65, 0.0, 1.0, -0.275, -0.6, 0.0, 1.0,

	        -0.25, -0.55, 0.0, 1.0, -0.2, -0.55, 0.0, 1.0, -0.25, -0.6, 0.0, 1.0, // lease4
	        -0.25, -0.6, 0.0, 1.0, -0.2, -0.55, 0.0, 1.0, -0.2, -0.6, 0.0, 1.0,

	        -0.25, -0.525, 0.0, 1.0, -0.2, -0.525, 0.0, 1.0, -0.25, -0.575, 0.0, 1.0,// lease5
	        -0.25, -0.575, 0.0, 1.0, -0.2, -0.525, 0.0, 1.0, -0.2, -0.575, 0.0, 1.0,


	        -0.375, -0.525, 0.0, 1.0, -0.325, -0.525, 0.0, 1.0, -0.375, -0.575, 0.0, 1.0,// lease6
	        -0.375, -0.575, 0.0, 1.0, -0.325, -0.525, 0.0, 1.0, -0.325, -0.575, 0.0, 1.0,

	        -0.3, -0.475, 0.0, 1.0, -0.3, -0.525, 0.0, 1.0, -0.25, -0.475, 0.0, 1.0,// lease7
	        -0.25, -0.525, 0.0, 1.0, -0.3, -0.525, 0.0, 1.0, -0.25, -0.475, 0.0, 1.0,

	        -0.325, -0.475, 0.0, 1.0, -0.325, -0.525, 0.0, 1.0, -0.275, -0.475, 0.0, 1.0, // lease8
	        -0.275, -0.525, 0.0, 1.0, -0.325, -0.525, 0.0, 1.0, -0.275, -0.475, 0.0, 1.0,


	        -0.8, -0.55, 0.0, 1.0, -0.7, -0.55, 0.0, 1.0, -0.8, -0.68, 0.0, 1.0,// curtain
	        -0.6, -0.55, 0.0, 1.0, -0.7, -0.55, 0.0, 1.0, -0.6, -0.68, 0.0, 1.0,

	        -0.375, -0.8, 0.0, 1.0, -0.325, -0.8, 0.0, 1.0, -0.375, -0.85, 0.0, 1.0,// handle
	        -0.375, -0.85, 0.0, 1.0, -0.325, -0.8, 0.0, 1.0, -0.325, -0.85, 0.0, 1.0,

	        -0.4, -0.7, 0.0, 1.0, -0.2, -0.7, 0.0, 1.0, -0.4, -1, 0.0, 1.0, // door
	        -0.4, -1, 0.0, 1.0, -0.2, -1, 0.0, 1.0, -0.2, -0.7, 0.0, 1.0,

	        -0.8, -0.55, 0.0, 1.0, -0.8, -0.75, 0.0, 1.0, -0.6, -0.55, 0.0, 1.0,// window
	        -0.8, -0.75, 0.0, 1.0, -0.6, -0.75, 0.0, 1.0, -0.6, -0.55, 0.0, 1.0,


	        -0.9, -0.4, 0.0, 1.0, -0.1, -0.4, 0.0, 1.0, -0.5, -0.2, 0.0, 1.0, //roof

	        -0.375, -0.15, 0.0, 1.0, -0.175, -0.4, 0.0, 1.0, -0.375, -0.4, 0.0, 1.0,// stack
	        -0.375, -0.15, 0.0, 1.0, -0.175, -0.15, 0.0, 1.0, -0.175, -0.4, 0.0, 1.0,

	        -0.9, -1, 0.0, 1.0, -0.9, -0.4, 0.0, 1.0, -0.1, -0.4, 0.0, 1.0, // square
	        -0.9, -1, 0.0, 1.0, -0.1, -0.4, 0.0, 1.0, -0.1, -1, 0.0, 1.0,


	        ////tree///

	        0.0, 1.0, 0.0, 1.0,
	        -0.25, 0.7, -0.25, 1.0,
	        -0.25, 0.7, 0.25, 1.0,

	        0.0, 1.0, 0.0, 1.0,
	        -0.25, 0.7, 0.25, 1.0,
	        0.25, 0.7, 0.25, 1.0,

	        0.0, 1.0, 0.0, 1.0,
	        0.25, 0.7, 0.25, 1.0,
	        0.25, 0.7, -0.25, 1.0,

	        0.0, 1.0, 0.0, 1.0,
	        -0.25, 0.7, -0.25, 1.0,
	        0.25, 0.7, -0.25, 1.0,

	        //2
	        0.0, 0.9, 0.0, 1.0,
	        -0.3, 0.5, -0.3, 1.0,
	        -0.3, 0.5, 0.3, 1.0,

	        0.0, 0.9, 0.0, 1.0,
	        -0.3, 0.5, 0.3, 1.0,
	        0.3, 0.5, 0.3, 1.0,

	        0.0, 0.9, 0.0, 1.0,
	        0.3, 0.5, 0.3, 1.0,
	        0.3, 0.5, -0.3, 1.0,

	        0.0, 0.9, 0.0, 1.0,
	        -0.3, 0.5, -0.3, 1.0,
	        0.3, 0.5, -0.3, 1.0,
	        
	        //wood
	        0.1, 0.5, 0.1, 1.0,
	        -0.1, 0.5, 0.1, 1.0,
	        -0.1, 0.4, 0.1, 1.0,

	        0.1, 0.5, 0.1, 1.0,
	        0.1, 0.4, 0.1, 1.0,
	        -0.1, 0.4, 0.1, 1.0,

	        0.1, 0.5, -0.1, 1.0,
	        -0.1, 0.5, -0.1, 1.0,
	        -0.1, 0.4, -0.1, 1.0,

	        0.1, 0.5, -0.1, 1.0,
	        0.1, 0.4, -0.1, 1.0,
	        -0.1, 0.4, -0.1, 1.0,

	        0.1, 0.5, 0.1, 1.0,
	        0.1, 0.5, -0.1, 1.0,
	        0.1, 0.4, -0.1, 1.0,

	        0.1, 0.5, 0.1, 1.0,
	        0.1, 0.4, 0.1, 1.0,
	        0.1, 0.4, -0.1, 1.0,

	        -0.1, 0.5, 0.1, 1.0,
	        -0.1, 0.5, -0.1, 1.0,
	        -0.1, 0.4, -0.1, 1.0,

	        -0.1, 0.5, 0.1, 1.0,
	        -0.1, 0.4, 0.1, 1.0,
	       -0.1, 0.4,- 0.1, 1.0,

	       //// smoke ////
	       -0.35, -0.05 + moving, 0.0, 1.0, -0.3, -0.05 + moving, 0.0, 1.0, -0.35, -0.1 + moving, 0.0, 1.0,
	       -0.35, -0.1 + moving, 0.0, 1.0, -0.3, -0.05 + moving, 0.0, 1.0, -0.3, -0.1 + moving, 0.0, 1.0,

	       -0.225, 0 + moving, 0.0, 1.0, -0.175, 0 + moving, 0.0, 1.0, -0.225, -0.05 + moving, 0.0, 1.0,
	       -0.225, -0.05 + moving, 0.0, 1.0, -0.175, 0 + moving, 0.0, 1.0, -0.175, -0.05 + moving, 0.0, 1.0,

	       -0.35, 0.05 + moving, 0.0, 1.0, -0.3, 0.05 + moving, 0.0, 1.0, -0.35, 0 + moving, 0.0, 1.0,
	       -0.35, 0 + moving, 0.0, 1.0, -0.3, 0.05 + moving, 0.0, 1.0, -0.3, 0 + moving, 0.0, 1.0,

	       -0.15, 0.1 + moving, 0.0, 1.0, -0.1, 0.1 + moving, 0.0, 1.0, -0.15, 0.05 + moving, 0.0, 1.0,
	       -0.15, 0.05 + moving, 0.0, 1.0, -0.1, 0.1 + moving, 0.0, 1.0, -0.1, 0.05 + moving, 0.0, 1.0,

	       -0.35, 0.2 + moving, 0.0, 1.0, -0.3, 0.2 + moving, 0.0, 1.0, -0.35, 0.15 + moving, 0.0, 1.0,
	       -0.35, 0.15 + moving, 0.0, 1.0, -0.3, 0.2 + moving, 0.0, 1.0, -0.3, 0.15 + moving, 0.0, 1.0,

	       -0.2, 0.3 + moving, 0.0, 1.0, -0.15, 0.3 + moving, 0.0, 1.0, -0.2, 0.25 + moving, 0.0, 1.0,
	       -0.2, 0.25 + moving, 0.0, 1.0, -0.15, 0.3 + moving, 0.0, 1.0, -0.15, 0.25 + moving, 0.0, 1.0,

	       -0.2, 0.3 + moving, 0.0, 1.0, -0.15, 0.3 + moving, 0.0, 1.0, -0.2, 0.25 + moving, 0.0, 1.0,
	       -0.2, 0.25 + moving, 0.0, 1.0, -0.15, 0.3 + moving, 0.0, 1.0, -0.15, 0.25 + moving, 0.0, 1.0,
	    ]);
		return vertex;
	}
    var canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    vertex = setVertices();
    
    document.getElementById( "risingButton" ).onclick = function () {
        
        if (smoke_flag == 0) {
        smoke_flag = 1;
        }

          console.log(smoke_flag);
          
        setTimeout(function (){ 
           if (moving <= 0.14 ) {
              moving += 0.02;
              console.log('moving is ', moving);
              
                vertex = setVertices();
                
//               vertex = smoke;

                gl.changeBuffer("vPosition", vertex);
                
               render(vertex);
               document.getElementById( "risingButton" ).click();
           }
           
        }, delay*2);
     };

    
     document.getElementById( "sinkingButton" ).onclick = function () {
         
         if (smoke_flag == 0) {
         smoke_flag = 1;
         }

           console.log(smoke_flag);
           
         setTimeout(function (){ 
            if (moving >= 0) {
               moving-=0.02;
               console.log('moving is ', moving);
               
               vertex = setVertices();
                 
//                vertex = smoke;

                 gl.changeBuffer("vPosition", vertex);
                 
                render(vertex);
                document.getElementById( "sinkingButton" ).click();
            }
            
         }, delay*2);
      };


    var colorArray = [
        [1, 1, 0, 1], // star

        //// house ////
        [1, 0.1, 0.4, 1],
        [0.32, 0.49, 0.46, 1],
        [0.74902, 0.847059, 0.847059, 1], // curtain
        [0.35, 0.16, 0.14, 1], // handle
        [0.52, 0.37, 0.26, 1], // door       
        [1, 1, 1, 1], // window
        [0.91, 0.76, 0.65, 1], // roof
        [0.65, 0.50, 0.39, 1], // stack
        [0.65, 0.50, 0.39, 1], // square

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.8, 0.0, 0.8],  // tree

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.8, 0.0, 0.8],  // tree
        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.8, 0.0, 0.8],  // tree

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.8, 0.0, 0.8],  // tree

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.6, 0.0, 1.0],  // tree

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.6, 0.0, 1.0],  // tree


        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.6, 0.0, 1.0],  // tree

        [1.0, 1.0, 1.0, 0.1],  // snow
        [0.0, 0.6, 0.0, 1.0],  // tree

        [0.58, 0.29, 0, 1.0],// wood


        // TODO: 이 위에 넣어주세요
        //// smoke ////
        [0.658824, 0.658824, 0.658824, 1]// smoke

    ];

    // TODO: 맨 마지막은 smoke라고 생각하고 써야해요
    var length = [24, 24, 48, 6, 6, 6, 6, 3, 6, 6, 1,2, 1,2, 1,2, 1,2, 1,2,1,2,1,2,1,2 ,24, 42];

    var theta = -15/180;
    var pi = Math.PI * theta;
    for (var i = 135*4; i < (135 + 48)*4; i++) {
        if (i % 4 == 0) {//x
            vertex[i] += 0.4;
            vertex[i] = vertex[i] * Math.cos(-pi) - vertex[i + 2] * Math.sin(-pi);
        }
        else if (i % 4 == 1) {//y
            vertex[i] -= 0.5;
            vertex[i] = vertex[i] * Math.cos(pi) - vertex[i + 1] * Math.sin(pi);
        }
        else if (i % 4 == 2) {//z
            vertex[i] -= 0.5;
            vertex[i] = vertex[i - 1] * Math.sin(pi) + vertex[i] * Math.cos(pi);
            vertex[i] = vertex[i-2] * Math.sin(-pi) + vertex[i] * Math.cos(-pi);

        }
    }
 
 
    

    gl.enable(gl.DEPTH_TEST);

    //  Load shaders and initialize 
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    for (var i = 0; i < colorArray.length; i++) {
        for (var j = 0; j < length[i]; j++) {
            colors.push(colorArray[i]);
        }
    }

    console.log(vertex);

    //points.push(vertex);

    console.log(points);

    //3D tree

    
    
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.184314, 0.184314, 0.309804, 1.0);

    
    gl.changeBuffer = function(name, array) {
       // create a buffer on gpu and bind point    
        var bufferId = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
        gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);

        // Associate out shader variables with our data buffer      
        // attribute variable
        var attr = gl.getAttribLocation(program, name);
        gl.vertexAttribPointer(attr, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(attr);
    }

    gl.changeBuffer("vPosition", vertex)
    gl.changeBuffer("vColor", flatten(colors))
    render(vertex);
    // create a buffer on gpu and bind point    
  

};

function render(vertex) {

    if (smoke_flag == 1) {
        // TODO: 135 -> 총 개수
        numVertices = 183 + 42;
    }

    else {
        // TODO: 135 -> 총 개수
        numVertices = 183 + 42;
    }

    console.log(vertex.length);
    console.log(vertex);
    console.log('vertices: '+numVertices);
    
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, numVertices);

    // create a buffer on gpu and bind point    

}