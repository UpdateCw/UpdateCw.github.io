; (function () {

    var radius = 120;
    var dtr = Math.PI / 180;
    var d = 300;
    var mcList = [];
    var active = false;
    var lasta = 1;
    var lastb = 1;
    var distr = true;
    var tspeed = 10;
    var size = 250;

    var mouseX = 0;
    var mouseY = 0;

    var howElliptical = 1;

    var aA = null;
    var oDiv = null;

    window.onload = function () {
        var i = 0;
        var oTag = null;

        oDiv = document.getElementById('tagsList');

        aA = oDiv.getElementsByTagName('a');

        for (i = 0; i < aA.length; i++) {
            oTag = {};

            oTag.offsetWidth = aA[i].offsetWidth;
            oTag.offsetHeight = aA[i].offsetHeight;

            mcList.push(oTag);
        }

        sineCosine(0, 0, 0);

        positionAll();

        oDiv.onmouseover = function () {
            active = true;
        };

        oDiv.onmouseout = function () {
            active = false;
        };

        oDiv.onmousemove = function (ev) {
            var oEvent = window.event || ev;

            mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
            mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);

            mouseX /= 5;
            mouseY /= 5;
        };

        setInterval(update, 30);
    };

    function update() {
        var a;
        var b;

        if (active) {
            a = (-Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
            b = (Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
        }
        else {
            a = lasta * 0.98;
            b = lastb * 0.98;
        }

        lasta = a;
        lastb = b;

        if (Math.abs(a) <= 0.01 && math.abs(b) <="0.01)" { return; } var c="0;" sinecosine(a, b, c); for (var j="0;" mclist.length; j++) rx1="mcList[j].cx;" ry1="mcList[j].cy" * ca + mclist[j].cz (-sa); rz1="mcList[j].cy" sa ca; rx2="rx1" cb sb; ry2="ry1;" rz2="rx1" (-sb) cb; rx3="rx2" cc (-sc); ry3="rx2" sc cc; rz3="rz2;" mclist[j].cx="rx3;" mclist[j].cy="ry3;" per="d" (d rz3); mclist[j].x="(howElliptical" per) - (howelliptical 2); mclist[j].y="ry3" per; mclist[j].scale="per;" mclist[j].alpha="per;" 0.6) (10 6); doposition(); depthsort(); function depthsort() i="0;" atmp="[];" (i="0;" aa.length; i++) atmp.push(aa[i]); atmp.sort ( (vitem1, vitem2) if (vitem1.cz> vItem2.cz) {
		        return -1;
		    }
		    else if (vItem1.cz < vItem2.cz) {
		        return 1;
		    }
		    else {
		        return 0;
		    }
		}
	);

        for (i = 0; i < aTmp.length; i++) {
            aTmp[i].style.zIndex = i;
        }
    }

    function positionAll() {
        var phi = 0;
        var theta = 0;
        var max = mcList.length;
        var i = 0;

        var aTmp = [];
        var oFragment = document.createDocumentFragment();
        //by http://www.hellocsharp.com
        //随机排序
        for (i = 0; i < aA.length; i++) {
            aTmp.push(aA[i]);
        }

        aTmp.sort
	(
		function () {
		    return Math.random() < 0.5 ? 1 : -1;
		}
	);

        for (i = 0; i < aTmp.length; i++) {
            oFragment.appendChild(aTmp[i]);
        }

        oDiv.appendChild(oFragment);

        for (var i = 1; i < max + 1; i++) {
            if (distr) {
                phi = Math.acos(-1 + (2 * i - 1) / max);
                theta = Math.sqrt(max * Math.PI) * phi;
            }
            else {
                phi = Math.random() * (Math.PI);
                theta = Math.random() * (2 * Math.PI);
            }
            //坐标变换
            mcList[i - 1].cx = radius * Math.cos(theta) * Math.sin(phi);
            mcList[i - 1].cy = radius * Math.sin(theta) * Math.sin(phi);
            mcList[i - 1].cz = radius * Math.cos(phi);

            aA[i - 1].style.left = mcList[i - 1].cx + oDiv.offsetWidth / 2 - mcList[i - 1].offsetWidth / 2 + 'px';
            aA[i - 1].style.top = mcList[i - 1].cy + oDiv.offsetHeight / 2 - mcList[i - 1].offsetHeight / 2 + 'px';
        }
    }
    //by http://www.hellocsharp.com
    function doPosition() {
        var l = oDiv.offsetWidth / 2;
        var t = oDiv.offsetHeight / 2;
        for (var i = 0; i < mcList.length; i++) {
            aA[i].style.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
            aA[i].style.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';

            aA[i].style.fontSize = Math.ceil(12 * mcList[i].scale / 2) + 8 + 'px';

            aA[i].style.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
            aA[i].style.opacity = mcList[i].alpha;
        }
    }

    function sineCosine(a, b, c) {
        sa = Math.sin(a * dtr);
        ca = Math.cos(a * dtr);
        sb = Math.sin(b * dtr);
        cb = Math.cos(b * dtr);
        sc = Math.sin(c * dtr);
        cc = Math.cos(c * dtr);
    }


})();
//by http://www.hellocsharp.com</=>