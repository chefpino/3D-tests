      //***********************************************************
      function plot(x, y) {
        //x,y are canvas coordinates
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(x, y, 2, 0, 2 * Math.PI); //.arc(x,y,2,1);
        ctx.fill();
      }
      //-------------------------------------------
      function drawAxis() {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "0.2";
        ctx.moveTo(px(x0), py(0));
        ctx.lineTo(px(x1), py(0));
        ctx.stroke();
        ctx.moveTo(px(0), py(y0));
        ctx.lineTo(px(0), py(y1));
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(px(0), py(0), 318, 0, 2 * Math.PI); //.arc(x,y,2,1); //hardcoded!
        ctx.stroke();
      }
      //-------------------------------------------
      function draw(c) {
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.moveTo(px(0), py(0));
        ctx.lineTo(px(c.x), py(c.y));
        ctx.stroke();

        //tip
        plot(px(c.x), py(c.y));
      }
      //----------------------------------------------
      function drawSegment(c1, c2, strColor) {
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.strokeStyle = strColor;
        ctx.moveTo(px(c1.x), py(c1.y));
        ctx.lineTo(px(c2.x), py(c2.y));
        ctx.stroke();
      }
