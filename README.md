# PR Hydrogeology Experiment
A repository meant for gathering hydrogeological information/references and data for learning and experimentation.

---
# TODO
Separate settings for production if the app gets deployed

---

# Thoughts
My purpose in starting this repository is to study and learn about methods for groundwater analysis, find a way to make the pertinent visualizations available to the web and record those steps here for future reference.

One of the "simplest" hydrogeological exercises I can do is the construction of a potentiometric surface map.  The data of groundwater wells is readily available through the [USGS's REST Web Service](https://waterservices.usgs.gov/rest/IV-Test-Tool.html), and it can output the data in a variety of formats for consumption (JSON, XML, .rdb).  There are other services that provide water quality/quantity data, but I decided to stick with one data source until I get a better idea of what I'm doing.

I decided create a potentiometric surface map for the area of Salinas, primarly because there's already a [study](https://pubs.usgs.gov/sim/2005/2910/sim2610.pdf) done using data from the 9 - 11 of July, 2002.  This study concluded that there was a cone of depression that indicated a great potential for seawater intrusion in the area.  The study's not only interesting due to the area's circumstances, but it also provides me with a mark of reference for when I create my own potentiometric surface map. 

The [data](https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&stateCd=pr&startDT=2018-07-09&endDT=2018-07-12&siteType=GW,GW-CR,GW-EX,GW-HZ,GW-IW,GW-MW,GW-TH&siteStatus=all) I'll be using will come from wells in the Salinas area, and the data will range from July 9 - July 11, 2018.  If all goes well I may create maps for the same range of dates from previous years.  I believe the USGS REST Service has data from at least October 2005, so I should be able to obtain data from a similar number of wells from that year up to now.

One of the main pieces of work I'll be using for reference is the work done by the [Illinois State Water Survey](https://www.isws.illinois.edu/pubdoc/CR/ISWSCR2013-06.pdf).  The publication has one of the most comprehensive methodology sections for Water Level Measurements I've found.  I'll be using the [ATLAS OF GROUND-WATER RESOURCES IN PUERTO RICO AND THE U.S. VIRGIN ISLANDS](https://pr.water.usgs.gov/public/online_pubs/wri94_4198/wri94_4198.pdf) for information specific to the South Coast of Puerto Rico.

My first approach to this excersice will possibly follow the workflow proposed by [Walt Gurley](https://www.youtube.com/watch?v=bFpMTI3BnAs) during one of his NC GIS Conference presentations.  

The worflow goes like so:
.shp/.csv/.etc -> QGIS -> Export geoJSON -> topoJSON for simplifying geoJSON data --> D3

Using QGIS will not only allow me to be more certain about the maps generated, it will also allow me to play around with Kriging interpolation.  [Here](https://pubs.usgs.gov/sir/2008/5059/section3.html)'s a study using that method. 

---

# Workflow and tools for visualization to consider

An Open Source Workflow For Creating Unique Web Maps With QGIS Topojson And D3 
https://www.youtube.com/watch?v=bFpMTI3BnAs


Alternative: Plotly Matplotlib Library
https://plot.ly/matplotlib/
Plotly's able to create visualizations and plot them using D3. It also has React components.

---

# Hydrogeology References

USGS Instantaneous Values REST Web Service URL Generation Tool
https://waterservices.usgs.gov/rest/IV-Test-Tool.html

ATLAS OF GROUND-WATER RESOURCES IN PUERTO RICO AND THE U.S. VIRGIN ISLANDS
https://pr.water.usgs.gov/public/online_pubs/wri94_4198/wri94_4198.pdf

Potentiometric Surface of the Alluvial Aquifer and Hydrologic Conditions at the Río Nigua de Salinas Alluvial Fan. (2002)
https://pubs.usgs.gov/sim/2005/2910/sim2610.pdf

Water and Energy Balance Results for Puerto Rico (1-km spatial resolution)
https://pragwater.com/goes-puerto-rico-water-and-energy-balance-goes-web-algorithm/

Methods for Water Balance Computations
http://unesdoc.unesco.org/images/0001/000115/011523eo.pdf

Groundwater Quality Survey of the South Coast Aquifer of PR, April 2 through May 30 2007
https://pubs.usgs.gov/sim/3092/pdf/sim-3092.pdf

Solid Waste Landfill Facilities
https://hifld-geoplatform.opendata.arcgis.com/datasets/solid-waste-landfill-facilities/data?geometry=-68.126%2C17.701%2C-64.421%2C18.615&selectedAttribute=STATUS&where=STATE%20like%20%27%25PR%25%27%20AND%20STATUS%20%3D%20%27OPEN%27

Hydrologic Information
https://pr.water.usgs.gov/infodata/

Water Quality Data
https://www.waterqualitydata.us

Groundwater Simulation, Modeling and Potentiometric Surface Mapping, McHenry County, Illinois.
https://www.isws.illinois.edu/pubdoc/CR/ISWSCR2013-06.pdf

Potentiometric Surface and Water-Level Difference Maps of Selected Confined Aquifers in Southern Maryland and Maryland’s Eastern Shore, 1975–2011
https://pubs.usgs.gov/sir/2012/5165/pdf/sir2012-5165_508.pdf

Estimated Depth to Ground Water and Configuration of the Water Table in the Portland, Oregon Area (Kriging...)
https://pubs.usgs.gov/sir/2008/5059/section3.html

Ground Water Mapping and Assessment in British Columbia
http://www.env.gov.bc.ca/wsd/plan_protect_sustain/groundwater/library/mapping/mapping2.html#c3

Potentiometric Surface, 2013, and Water-Level Differences, 1991–2013, of the Carrizo-Wilcox Aquifer in Northwest Louisiana
https://pubs.usgs.gov/sim/3311/pdf/sim3311.pdf


MEASURING AND MAPPING GROUND-WATER LEVELS IN WELLS
https://il.water.usgs.gov/pubs/ofr01-50_chapter4_4.pdf

---

# Coding References
d3-contour
https://github.com/d3/d3-contour

Contours of Nepal using topojson and d3.js
http://bl.ocks.org/phil-pedruco/9999984

Contour Plots with D3 and R
http://ramnathv.github.io/vistat-dupe/posts/2012-11-07-contour-plots-with-d3-and-r.html