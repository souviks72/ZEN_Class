The rendering engine parses the html file and css file and constructs the render tree. Then the layout is created and finally painted.

HTML Parsing:
It is very forgiving, mistakes dont throw error so easily, the program tries to recover
from mistakes,the parsing can be halted.If we miss close tags, the parser puts them itself. A lot of misplaced text is correctly placed by the engine. 
The entire document is tokenised and then parsed as a string of sorts. The parse tree starts at the open tag, looks at what kind of tag it is, then its contents and then the close tag is encountered. 
The html tree starts with the html tag, then head tag, followed by the body tag. The parsing can be halted by network latencies or by javascript or css files.
There is a thing called speculative parsing where the parser will look ahead by creating another thread and will fetch external scripts, images etc before hand.
Whenever a new element is created and inserted into the DOM tree, the entire DOM is redrawn and this slows down the page.

PERFORMANCE:
Script tag at the end increases performance because it doesnot halt the parsing, creating faster render. Async attributes however are deferred, so they might slow it down when some elements need to be redrawn.

CSS PARSING:
It creates the CCS Object Model (CSSOM) and is standard parsing.

The DOM and CSSOM is what we actually see on the screen.
This mapping is not one on one. The JS script interferes in between. 
There are multiple trees:
RenderObject
RenderStyles
RenderLayers
Line Boxes

Not in the render tree include elements with display: none and non visual elements like head,script, title etc.

How the rendering happens:
1. Calculating Visual Properties like font-size, specificity, etc
2. The layout is drawn, by traversing the render tree recursively, so the children are drawn first, then the parents.
Layouts are drawn in batches.This process is asynchronous.
3. Changing any display settings in the Browser will cause the render tree to be drawn again

Performance Insights 2
1. Batch your DOM changes
2. Do all your reads in one pass
3. Followed by writes


