
    function generateRandomPosts()
    {
        $.getJSON("/search.json", function(data) {
            console.log("[search.json loaded for random posts]");

            var postsCount = data.length;
            var posts = data;

            var randomIndexUsed = [];
            var counter = 0;
            var numberOfPosts = 8;

            var divRandomPosts = $("#random_posts");

            divRandomPosts.append('');

            while (counter < numberOfPosts)
            {
                var randomIndex = Math.floor(Math.random() * postsCount);

                if (randomIndexUsed.indexOf(randomIndex) == "-1")
                {
                    var postHREF = posts[randomIndex].href;
                    var postTitle = posts[randomIndex].title;
					var postTag = posts[randomIndex].tags;

                    if (counter == (numberOfPosts - 1))
                    {
                        divRandomPosts.append('<div class="article-medium"><div class="article-header"><img  src="http://i2.wp.com/media.radiobucket.com/images/play.png" alt="img" /></div><div class="article-content"><h2><a href="' + postHREF + '" title="' + postTitle + '">' + postTitle + '</a></h2></div><div class="article-footer"><a class="left">Genre : ' + postTag + ' </a><a href="' + postHREF + '" class="right">TuneIn<span class="icon-text">&#9656;</span></a><div class="clear-float"></div></div></div>');
                    }
                    else
                    {
                        divRandomPosts.append('<div class="article-medium"><div class="article-header"><img  src="http://i2.wp.com/media.radiobucket.com/images/play.png" alt="img" /></div><div class="article-content"><h2><a href="' + postHREF + '" title="' + postTitle + '">' + postTitle + '</a></h2></div><div class="article-footer"><a class="left">Genre : ' + postTag + ' </a><a href="' + postHREF + '" class="right">TuneIn<span class="icon-text">&#9656;</span></a><div class="clear-float"></div></div></div>');
                    }

                    randomIndexUsed.push(randomIndex);

                    counter++;
                }
            }
        });
    }

    $(document).ready(function() {
        generateRandomPosts();
    });
