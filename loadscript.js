function makedoc() {
        var seed = Math.random()*900000000 + 100000000;
        var keepTitle = true;
        var first = seed%10 - seed %1;

        if (seed > 750000000) {
            keepTitle = false;
        }

        var snum = document.createElement("p");
        snum.innerHTML = seed;
        document.body.appendChild(snum);

        if (first >= 8) { //Header Tree
            if (keepTitle) {
            var title = document.createElement("h1");
            var tag = document.createElement("p");
            title.innerHTML = "First option";
            tag.innerHTML = "An interesting bit of text describing the website.";

            document.body.appendChild(title);
            document.body.appendChild(tag); //No img above fold keep title
            }
        } else {
            if (first <= 1) { //image takes up whole page
                if (first == 1){
                    var iwid = parseInt((200 + Math.random()*800), 10);
                    var ihigh = parseInt((200 + Math.random()*800), 10);
                    var pic = parseInt(1*(Math.random()*1000), 10);
                    var att = document.createAttribute("src");
                    var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                    att.value = picval;

                    var title = document.createElement("h1");
                    var tag = document.createElement("p");
                    title.innerHTML = "Second option";
                    tag.innerHTML = "An interesting bit of text describing the website.";

                    document.body.style.backgroundImage = "url('" + picval + "')";

                    document.body.appendChild(title);
                    document.body.appendChild(tag);//full splash
                } else {
                    var splashcont = document.createElement("div");
                    splashcont.style.height = "100vh";
                    splashcont.style.width = "100vw";

                    var iwid = parseInt((200 + Math.random()*800), 10);
                    var ihigh = parseInt((200 + Math.random()*800), 10);
                    var pic = parseInt(1*(Math.random()*1000), 10);
                    var att = document.createAttribute("src");
                    var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                    att.value = picval;

                    var br = document.createElement("br");

                    var title = document.createElement("h1");
                    var tag = document.createElement("p");
                    title.innerHTML = "Third option";
                    tag.innerHTML = "An interesting bit of text describing the website.";

                    document.body.appendChild(splashcont)
                    splashcont.style.backgroundImage = "url('" + picval + "')";
                    document.body.appendChild(br);
                    document.body.appendChild(title);
                    document.body.appendChild(tag);//scrollable
                }
            } else if (2 <= first && first <= 4) {
                var splashcont = document.createElement("div");
                splashcont.style.height = "40vh";
                splashcont.style.width = "100vw";
                splashcont.setAttribute("id", "headdiv");

                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Fourth option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(splashcont)
                splashcont.style.backgroundImage = "url('" + picval + "')";
                document.getElementById("headdiv").appendChild(title);
                document.getElementById("headdiv").appendChild(tag);//Header with text
            } else if (5 <= first && first <= 6) {
                var splashcont = document.createElement("div");
                splashcont.style.height = "40vh";
                splashcont.style.width = "100vw";
                splashcont.setAttribute("id", "headdiv");

                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Fifth option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(splashcont)
                splashcont.style.backgroundImage = "url('" + picval + "')";
                document.body.appendChild(title);
                document.body.appendChild(tag);//Header with text
            } else {
                var img = document.createElement("img");
                var iwid = parseInt((200 + Math.random()*800), 10);
                var ihigh = parseInt((200 + Math.random()*800), 10);
                var pic = parseInt(1*(Math.random()*1000), 10);
                var att = document.createAttribute("src");
                var picval = "https://picsum.photos/id/" + pic + '/' + iwid + '/' + ihigh;
                att.value = picval;
                img.style.width = "50vw";
                img.setAttributeNode(att);

                var title = document.createElement("h1");
                var tag = document.createElement("p");
                title.innerHTML = "Last option";
                tag.innerHTML = "An interesting bit of text describing the website.";

                document.body.appendChild(title);
                document.body.appendChild(tag);
                document.body.appendChild(img); //Half image half title
            }
        }
        }