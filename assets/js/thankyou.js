let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		allNumbers = gsap.utils.toArray('#numberGroup path'),
		allThankYou = gsap.utils.toArray('#thankYouGroup path'),
		//colorArray = ["#EF5350", "#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043","#8D6E63","#BDBDBD","#78909C"],
		colorArray = ["#42c2f1", "#fbda4f","#ab63df","#5fc581"],
		confetti = select('.confetti'),
		container = select('.container')

gsap.set('svg', {
	visibility: 'visible'
})
let confettiTl = gsap.timeline({paused: true});

function playConfetti () {
	confettiTl.play(0);
}

function createConfetti () {
 var i = 160, clone, tl, rot, duration, paperDuration;
 while(--i > -1) {
  tl = gsap.timeline();
  clone = confetti.cloneNode(true);
  container.appendChild(clone);
  rot = gsap.utils.random(0, 360);
  duration = gsap.utils.random(3, 9);
  paperDuration = (duration)/20;
  gsap.set(clone, {
   fill: gsap.utils.random(colorArray),
   rotation: rot,
   transformOrigin: '50% 50%'
  })
  
  tl.fromTo(clone, {
   x: gsap.utils.random(0, 800),
   y: gsap.utils.random(-250, -50),
   rotation: rot
  }, {
   duration: duration,
   x: '+=' + gsap.utils.random(-200, 200),
   y: 650,
   rotation: '+=180',
   ease: 'linear'
  })
  .to(clone.querySelector('.paper'), {
   duration: duration/23,
   scaleY: 0.1,   
   repeat: 23,
   yoyo: true
  }, 0)
  //console.log(paperDuration)
  confettiTl.add(tl, i/200).timeScale(2.3);
 }

	gsap.set('.paper', {
		transformOrigin: '50% 50%'
	}) 
}

let tl = gsap.timeline({repeat: -1});
tl.add('step0', '+=2')
.to('#one', {
	x: -105,
	ease: 'expo.inOut'
}, 'step0')
.to('#one', {
	rotation: 10,
	transformOrigin: '50% 150%',
	ease: 'sine.inOut'
}, 'step0+=0')
.to('#one', {
	rotation: 0,

	ease: 'elastic(0.8, 0.28)'
}, 'step0+=0.3')
.to('#one', {
	morphSVG: {
		shape: '#one_mid'
	},
	ease: 'expo.inOut'
}, 'step0')
.add('step1')
.to('#one, .numberMask', {
	x: '+=548',
	ease: 'expo.inOut'
}, 'step1')
.to('.thankYouMask', {
	x: '+=548',
	ease: 'expo.inOut'
}, 'step1')
.from(allThankYou, {
	x: 50,
	immediateRender: false,
	stagger: {
		each: 0.05
	},
	ease: 'expo'
}, 'step1')
.from('#gradBar', {
	width: 0,
	ease: 'expo.inOut'
}, 'step1')

.to('#one', {
	rotation: -10,
	transformOrigin: '50% 100%',
	ease: 'sine.inOut'
}, 'step1+=0')
.to('#one', {
	rotation: 0,
	duration: 1,
	ease: 'elastic(0.8, 0.28)'
}, 'step1+=0.3')

.add('step2', '-=0')
.to('#one', {
	morphSVG: {
		shape: '#one_end'
	},
	y: '-=80',
	ease: 'expo.inOut'
}, 'step2')
.to('#oneContainer', {
	scaleX: 1.4,
	scaleY: 0.6,
	duration: 0.8,
	transformOrigin: '50% 0%',
	ease: 'sine'
}, 'step2')


.add('step3')
.to('#one', {
	morphSVG: {
		shape: '#one_end'
	},
	y: '+=80',
	ease: 'expo.in'
}, 'step3')
.to('#oneContainer', {
	scale: 1,
	duration: 0.38,
	ease: 'expo.in'
}, 'step3')

.to('#one', {
	rotation: 3,
	duration: 1,
	transformOrigin: '50% 120%',
	ease: "wiggle({type:easeOut, wiggles:8})"
}, 'step3+=0.5')
.from('#dot', {
	scale: 0,
	transformOrigin: '50% 50%',
	ease: 'elastic(0.4, 0.5)'
}, 'step3+=0.46')
.add(playConfetti, 'step3+=0.46')
.add('step4', '+=2')
.to('#one', {
	morphSVG: {
		shape: "#one_mid"
	},
	duration: 0.2
}, 'step4')
.to('#one, .thankYouMask', {
	x: '-=548',
	ease: 'expo.inOut'
}, 'step4')
.to('#dot', {
	opacity: 0,
	duration: 0.2,
	ease: 'expo'
}, 'step4')
.to('.numberMask', {
	x: '-=548',
	ease: 'expo.inOut'
}, 'step4')
.from(allNumbers, {
	x: 50,
	immediateRender: false,
	stagger: {
		each: 0.05
	}
}, 'step4')
.from(allNumbers, {
	rotation: 50,
	transformOrigin: '50% 50%',
	immediateRender: false,
	stagger: {
		each: 0.05
	},
	ease: 'expo'
}, 'step4')
.to('#gradBar', {
	width: 0,
	ease: 'expo.inOut'
}, 'step4')

.add('step5')
.to('#one', {
	morphSVG: {
		shape: "M219.16,266.34h-16.8V253.5l32-.12v89.4H219.16Z"
	},
	ease: 'expo.inOut',
	x: 0
}, 'step5-=0.3')

.to('#one', {
	rotation: -10,
	transformOrigin: '50% 100%',
	ease: 'sine.inOut'
}, 'step5-=0.3')
.to('#one', {
	rotation: 0,
	duration: 1,
	ease: 'elastic(0.8, 0.28)'
}, 'step5')


createConfetti();

//start anim - plays once
gsap.from('#one, #numberGroup path', {
	stagger: {
		each: 0.05
	},
	scaleY:0,
	delay: 0.6,
	duration: 0.8,
	transformOrigin: '50% 100%',
	ease: 'elastic(0.73, 0.6)'
})

//loop the gradient bar
gsap.to('#gradPattern',  {
  attr:{
    x:556
  },
	duration: 2,
	repeat: -1,
  ease:'linear'
})
