const canvasElement = document.getElementById("canvas");
        const canvasContext = canvasElement.getContext("2d");
        let analogRadius = canvasElement.height / 2;
        canvasContext.translate(analogRadius, analogRadius);
        analogRadius = analogRadius * 0.90;
        setInterval(analogClockMaker, 1000);

        function analogClockMaker() {
            clockFaceMaker(canvasContext, analogRadius);
            clockNumberMaker(canvasContext, analogRadius);
            clockTimeMaker(canvasContext, analogRadius);
        }

        function clockFaceMaker(context, radius) {
            const gradient = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
            gradient.addColorStop(0, '#333');
            gradient.addColorStop(0.5, 'white');
            gradient.addColorStop(1, '#333');
            context.beginPath();
            context.arc(0, 0, radius, 0, 2*Math.PI);
            context.fillStyle = 'white';
            context.fill();
            context.strokeStyle = gradient;
            context.lineWidth = radius * 0.1;
            context.stroke();
            context.beginPath();
            context.arc(0, 0, radius * 0.1, 0, 2*Math.PI);
            context.fillStyle = '#333';
            context.fill();
        }

        function clockNumberMaker(context, radius) {
            context.font = radius * 0.15 + "px Arial";
            context.textBaseline = "middle";
            context.textAlign = "center";
            for(let num = 1; num < 13; num++){
                let ang = num * Math.PI / 6;
                context.rotate(ang);
                context.translate(0, -radius * 0.85);
                context.rotate(-ang);
                context.fillText(num.toString(), 0, 0);
                context.rotate(ang);
                context.translate(0, radius * 0.85);
                context.rotate(-ang);
            }
        }

        function clockTimeMaker(context, radius){
            const now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            let second = now.getSeconds();
            //hour
            hour = hour % 12;
            hour = (hour * Math.PI / 6) +
            (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
            clockHandMaker(context, hour, radius * 0.5, radius * 0.07);
            //minute
            minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
            clockHandMaker(context, minute, radius * 0.8, radius * 0.07);
            // second
            second = (second * Math.PI / 30);
            clockHandMaker(context, second, radius * 0.9, radius * 0.02);
        }

        function clockHandMaker(context, position, length, width) {
            context.beginPath();
            context.lineWidth = width;
            context.lineCap = "round";
            context.moveTo(0, 0);
            context.rotate(position);
            context.lineTo(0, -length);
            context.stroke();
            context.rotate(-position);
        }
