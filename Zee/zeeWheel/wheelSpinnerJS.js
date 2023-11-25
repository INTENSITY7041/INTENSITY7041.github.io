const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
{	minDegree: 	0	,	 maxDegree: 	4.5	,	 value:	"	A1: You are gentle	"	},
{	minDegree: 	5.5	,	 maxDegree: 	9	,	 value:	"	A2: Your are kind	"	},
{	minDegree: 	10	,	 maxDegree: 	13.5	,	 value:	"	A3: You have a nice laugh	"	},
{	minDegree: 	14.5	,	 maxDegree: 	18	,	 value:	"	A4: You are a favourite human being	"	},
{	minDegree: 	19	,	 maxDegree: 	22.5	,	 value:	"	A5: You are beautiful	"	},
{	minDegree: 	23.5	,	 maxDegree: 	27	,	 value:	"	A6: You are artistic	"	},
{	minDegree: 	28	,	 maxDegree: 	31.5	,	 value:	"	A7: You are amazing	"	},
{	minDegree: 	32.5	,	 maxDegree: 	36	,	 value:	"	A8: You are ray of shine	"	},
{	minDegree: 	37	,	 maxDegree: 	40.5	,	 value:	"	A9: You are peaceful	"	},
{	minDegree: 	41.5	,	 maxDegree: 	45	,	 value:	"	A10: You are compationate	"	},
{	minDegree: 	46	,	 maxDegree: 	49.5	,	 value:	"	A11: You are beautiful on the inside and out"	},
{	minDegree: 	50.5	,	 maxDegree: 	54	,	 value:	"	A12: You are talented"	},
{	minDegree: 	55	,	 maxDegree: 	58.5	,	 value:	"	A13: You are hard-working	"	},
{	minDegree: 	59.5	,	 maxDegree: 	63	,	 value:	"	A14: You are reliable	"	},
{	minDegree: 	64	,	 maxDegree: 	67.5	,	 value:	"	A15: You are helpful	"	},
{	minDegree: 	68.5	,	 maxDegree: 	72	,	 value:	"	A16: You are an extraordinary freind"	},
{	minDegree: 	73	,	 maxDegree: 	76.5	,	 value:	"	A17: Your opinion means a lot 	"	},
{	minDegree: 	77.5	,	 maxDegree: 	81	,	 value:	"	A18: You are a beacon of light in any room you enter	"	},
{	minDegree: 	82	,	 maxDegree: 	85.5	,	 value:	"	A19: You are strong	"	},
{	minDegree: 	86.5	,	 maxDegree: 	90	,	 value:	"	A20: You can handle a lot more than you think	"	},
{	minDegree: 	91	,	 maxDegree: 	94.5	,	 value:	"	B1	: You are a beacon of light in any room you enter"	},
{	minDegree: 	95.5	,	 maxDegree: 	99	,	 value:	"	B2: Take a pause to breathe this moment in and savour it	"	},
{	minDegree: 	100	,	 maxDegree: 	103.5	,	 value:	"	B3: You absolutely deserve all this happiness	"	},
{	minDegree: 	104.5	,	 maxDegree: 	108	,	 value:	"	B4: I hope more of this is coming your way	"	},
{	minDegree: 	109	,	 maxDegree: 	112.5	,	 value:	"	B5: After a long tough day remeber this moment and this feeling"},
{	minDegree: 	113.5	,	 maxDegree: 	117	,	 value:	"	B6: Go get em!	"	},
{	minDegree: 	118	,	 maxDegree: 	121.5	,	 value:	"	B7: I am truly happy for you!	"	},
{	minDegree: 	122.5	,	 maxDegree: 	126	,	 value:	"	B8: This moment is just a drop of water in your ocean of peace and love	"	},
{	minDegree: 	127	,	 maxDegree: 	130.5	,	 value:	"	B9: Does'nt feel good to finally catch a break?	"	},
{	minDegree: 	131.5	,	 maxDegree: 	135	,	 value:	"	B10: Pretend I am giving you the highest of fives 	"	},
{	minDegree: 	136	,	 maxDegree: 	139.5	,	 value:	"	B11: Pretend I am doing our handshake with you	"	},
{	minDegree: 	140.5	,	 maxDegree: 	144	,	 value:	"	B12: Relive the happiest moment of you birthday	"	},
{	minDegree: 	145	,	 maxDegree: 	148.5	,	 value:	"	B13: Remeber the moment you got into tuks	"	},
{	minDegree: 	149.5	,	 maxDegree: 	153	,	 value:	"B14: Remember the moment you got fial acceptance into Mechanical Engineering"},
{	minDegree: 	154	,	 maxDegree: 	157.5	,	 value:	"	B15: Inhale more positivity and exhale negativity	"	},
{	minDegree: 	158.5	,	 maxDegree: 	162	,	 value:	"	B16: Let your bubble of happiness grow	"	},
{	minDegree: 	163	,	 maxDegree: 	166.5	,	 value:	"	B17: Do not forget to show gratitude, it's good for the Soul	"	},
{	minDegree: 	167.5	,	 maxDegree: 	171	,	 value:	"	B18: Spread some of your good vibes to someone else today	"	},
{	minDegree: 	172	,	 maxDegree: 	175.5	,	 value:	"	B19: 	"	},
{	minDegree: 	176.5	,	 maxDegree: 	180	,	 value:	"	B20	"	},
{	minDegree: 	181	,	 maxDegree: 	184.5	,	 value:	"	C1: From Thado Redeem code C501	"	},
{	minDegree: 	185.5	,	 maxDegree: 	189	,	 value:	"Surely it would be easier to count all the decimals of pi than, to live in a world without you."	},
{	minDegree: 	190	,	 maxDegree: 	193.5	,	 value:	"	C3:	From Thado Redeem code C503"	},
{	minDegree: 	194.5	,	 maxDegree: 	198	,	 value:	"	C4:	From Thado Redeem code C504"	},
{	minDegree: 	199	,	 maxDegree: 	202.5	,	 value:	"A bouqet of a million sunflowers would not compare to you."	},
{	minDegree: 	203.5	,	 maxDegree: 	207	,	 value:	"	C6:	From Lama Redeem code C506"	},
{	minDegree: 	208	,	 maxDegree: 	211.5	,	 value:	"	C7"	},
{	minDegree: 	212.5	,	 maxDegree: 	216	,	 value:	"	C8:	From Lama Redeem code C508"	},
{	minDegree: 	217	,	 maxDegree: 	220.5	,	 value:	"The million stars baby's breath took the first words of its name from an attempt to replicate you."	},
{	minDegree: 	221.5	,	 maxDegree: 	225	,	 value:	"The sun could vanish and I would not notice because you are my source of warmth and the light that brightens up my world."	},
{	minDegree: 	226	,	 maxDegree: 	229.5	,	 value:	"	C11: From Thado Redeem code C801"	},
{	minDegree: 	230.5	,	 maxDegree: 	234	,	 value:	"Stars could fill the entire night sky and yet I would still prefer to watch them through your eyes."},
{	minDegree: 	235	,	 maxDegree: 	238.5	,	 value:	"	C13: From Thado Redeem code C803"	},
{	minDegree: 	239.5	,	 maxDegree: 	243	,	 value:	"	C14: From Thado Redeem code C804"	},
{	minDegree: 	244	,	 maxDegree: 	247.5	,	 value:	"If I wished to chase butterflies, I would simply follow you."	},
{	minDegree: 	248.5	,	 maxDegree: 	252	,	 value:	"The same way no one can ignore how bright the sun is, no one can ignore how beautiful you are."	},
{	minDegree: 	253	,	 maxDegree: 	256.5	,	 value:	"	If Mathematicians could study how amazing you are, they would have a new definition for infnity"	},
{	minDegree: 	257.5	,	 maxDegree: 	261	,	 value:	"	C18: From Lama Redeem code C808"	},
{	minDegree: 	262	,	 maxDegree: 	265.5	,	 value:	"	C19: From Thado Redeem code C601"	},
{	minDegree: 	266.5	,	 maxDegree: 	270	,	 value:	"	C20: From Thado Redeem code C602"	},
{	minDegree: 	271	,	 maxDegree: 	274.5	,	 value:	"	C21: From Thado Redeem code C603"	},
{	minDegree: 	275.5	,	 maxDegree: 	279	,	 value:	"If you married an astronaut, he would never work for NASA becasue you are all he would look at"	},
{	minDegree: 	280	,	 maxDegree: 	283.5	,	 value:	"	C23: From Thado Redeem code O710	"	},
{	minDegree: 	284.5	,	 maxDegree: 	288	,	 value:	"	C24: From Thado Redeem code	W919"	},
{	minDegree: 	289	,	 maxDegree: 	292.5	,	 value:	"	C25: From Thado Redeem code W987	"	},
{	minDegree: 	293.5	,	 maxDegree: 	297	,	 value:	"If you were broken glass I'd bleed just to hold you	"	},
{	minDegree: 	298	,	 maxDegree: 	301.5	,	 value:	"Raindrops fall from from the sky each one unique each one shy, all the drops craving your sight for you the sparkle and dance in the ligh.t"	},
{	minDegree: 	302.5	,	 maxDegree: 	306	,	 value:	"If you are the rose I'll be the thorn, if you the night, I'll be the dawn, if you are the calm I'll be the strom, If you are the queen, I'll be the pawn."	},
{	minDegree: 	307	,	 maxDegree: 	310.5	,	 value:	"Under a sky full of stars, my gaze would be satisfied lying upon you."	},
{	minDegree: 	311.5	,	 maxDegree: 	315	,	 value:	"If I drown, burn, fall, or even die, surely the sound of your voice shall bring me back to life."	},
{	minDegree: 	316	,	 maxDegree: 	319.5	,	 value:	"The sunflowers would mistake you for the sun, they would all turn to look at you."	},
{	minDegree: 	320.5	,	 maxDegree: 	324	,	 value:	"Even after becoming fluent in all langauges, you would still leave me speechless."	},
{	minDegree: 	325	,	 maxDegree: 	328.5	,	 value:	"This must be why the sky is so grey, all the color is in your eyes."	},
{	minDegree: 	329.5	,	 maxDegree: 	333	,	 value:	"When Adele said set fire to the rain, you went ahead and burnt it all."	},
{	minDegree: 	334	,	 maxDegree: 	337.5	,	 value:	"I had a conversation with the moon and the stars, they all told me how jealous of you they are and how they wish they could shine like you do."	},
{	minDegree: 	338.5	,	 maxDegree: 	342	,	 value:	"In autumn the leaves fall for you, but they wish they could fall harder."	},
{	minDegree: 	343	,	 maxDegree: 	346.5	,	 value:	"They say beauty is a subjective opinion, however they also say that yours is absolutley an objective fact."	},
{	minDegree: 	347.5	,	 maxDegree: 	351	,	 value:	" Da Vinci, painted the Mona Lisa, because you were still in heaven during his time."	},
{	minDegree: 	352	,	 maxDegree: 	355.5	,	 value:	"Surely you are meant for heaven, because even hell would melt from your flames."	},
{	minDegree: 	356.5	,	 maxDegree: 	360	,	 value:	"X-ray machines use Uranium, because otherwise nothing created by man coudl withstand your radiant beauty."	}

];
//Size of each piece
const data = [3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3];
//background color for each piece
var pieColors = [
  "#054d50",
  "#ffc905",
  "#054d50",
  "#b163da",
  "#054d50",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ["A1",
"A2",
"A3",
"A4",
"A5",
"A6",
"A7",
"A8",
"A9",
"A10",
"A11",
"A12",
"A13",
"A14",
"A15",
"A16",
"A17",
"A18",
"A19",
"A20",
"B1",
"B2",
"B3",
"B4",
"B5",
"B6",
"B7",
"B8",
"B9",
"B10",
"B11",
"B12",
"B13",
"B14",
"B15",
"B16",
"B17",
"B18",
"B19",
"B20",
"C1",
"C2",
"C3",
"C4",
"C5",
"C6",
"C7",
"C8",
"C9",
"C10",
"C11",
"C12",
"C13",
"C14",
"C15",
"C16",
"C17",
"C18",
"C19",
"C20",
"C21",
"C22",
"C23",
"C24",
"C25",
"C26",
"C27",
"C28",
"C29",
"C30",
"C31",
"C32",
"C33",
"C34",
"C35",
"C36",
"C37",
"C38",
"C39",
"C40",
],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});