function getSearchJSON(){$.getJSON("/search.json",function(e){console.log("[search.json loaded for instant search]"),$("#search_results").html(""),searchJSON=e})}function doSearch(e){results=[],""!=e?($.each(searchJSON,function(t,s){var r=s.title,a=s.title.toLowerCase(),n=s.href,o=s.date;-1!==a.indexOf(e)&&results.push([r,n,o])}),printResults()):($("#search_results").html(),results=[],printResults())}function printResults(){var e=$("#search_results");e.html(""),e.html(function(){0==results.length?e.append('<li style="padding-top: 3px; padding-bottom: 3px"><a word-wrap: break-word; white-space: normal" href="#">No results found</a></li><hr />'):$.each(results,function(t,s){e.append('<li style="padding-top: 3px; padding-bottom: 3px"><a word-wrap: break-word; white-space: normal" href="'+s[1]+'">&bull; '+s[0]+"</a></li><hr />")})})}function checkTextField(){""!=$("#search_input").val()?$("#search_results").show():$("#search_results").hide()}$(document).mouseup(function(e){var t=$("#search_results");t.is(e.target)||0!==t.has(e.target).length||t.hide()}),$(document).ready(function(){getSearchJSON(),$("#search_input").keyup(function(){var e=$(this).val().toLowerCase();doSearch(e)})});