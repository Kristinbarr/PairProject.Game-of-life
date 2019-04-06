# Game of Life in JS

## Game of Life

<br>“Zero-player” game (see animation)
<br>Rooted in Von Neumann’s quest for artificial/simulated life <br>Created by Jon Conway in 1970
<br>Sparked niche field: cellular automaton
<br>Simple rules can produce complex behavior
<br>
<br>

## RULES

<br>2D grid of cells that are currently on or off (dead or alive)
<br>Each step, grid updates all-at-once
<br>Currently alive cell
<br>“Underpopulation”: dies given fewer than 2 live neighbors
<br>“Overcrowding”: dies given greater than 3 live neighbors
<br>Otherwise, lives on
<br>Currently dead cell
<br>“Birth”: comes to life given exactly 3 live neighbors
<br>Otherwise, remains dead
<br>
<br>

## MANIPULATING THE DOM

<br>Changing Attributes for Style
<br>Making Elements
<br>Putting them into the DOM
<br>Remove Elements
<br>
<br>

## CHANGING STYLE ATTRIBUTES

<code>element.style.backgroundColor = “blue”</code>
CSS -> JavaScript
background-color -> backgroundColor
border-radius -> borderRadius
font-size -> fontSize
list-style-type -> listStyleType
word-spacing -> wordSpacing
z-index -> zIndex
<br>
<br>

## CHANGING CSS CLASSES

<br>**classList** is HTML5 way to modify which classes are on an
<code>document.getElementById("MyElement").classList.add('class')</code>
<code>document.getElementById("MyElement").classList.remove('class')</code>
<code>if ( document.getElementById("MyElement").classList.contains('class') )</code>
<code>document.getElementById("MyElement").classList.toggle('class')</code>
<br>
<br>

## EVENT HANDLERS

<code>element.addEventListener(‘click’, function(event) { // Run this code on click
})</code>
<br>JS that handles things that happen in the DOM
<br>Event examples:
<br>• click
<br>• (form) submit
<br>• hover
<br>• mouseover
<br>
<br>

## EVENT PROPAGATION/BUBBLING

<br>An event is directed to its intended target
<br>If there is an event handler it is triggered
<br>From here, the event **bubbles** up to the containing elements
<br>This continues to the document element itself
<img src="./images/slide12.png" style="display: block;" height="auto" width="auto"/>
<br>
<br>

## EVENT DELEGATION

<br>The process of using event propagation to handle events at a higher level in the DOM
<br>Allows for a single event listener
<img src="./images/slide13.png" style="display: block;" height="auto" width="auto"/>
<br>
