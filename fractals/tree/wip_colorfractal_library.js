      
      function getColor(c) {
        var r,
          g,
          b,
          p = c / 32,
          l = ~~(p * 6),
          o = p * 6 - l,
          q = 1 - o;

        switch (l % 6) {
          case 0:
            r = 1;
            g = o;
            b = 0;
            break;
          case 1:
            r = q;
            g = 1;
            b = 0;
            break;
          case 2:
            r = 0;
            g = 1;
            b = o;
            break;
          case 3:
            r = 0;
            g = q;
            b = 1;
            break;
          case 4:
            r = o;
            g = 0;
            b = 1;
            break;
          case 5:
            r = 1;
            g = 0;
            b = q;
            break;
        }
        var c =
          "#" +
          ("00" + (~~(r * 255)).toString(16)).slice(-2) +
          ("00" + (~~(g * 255)).toString(16)).slice(-2) +
          ("00" + (~~(b * 255)).toString(16)).slice(-2);
        return c;
      }

      //-------------------------------------------
