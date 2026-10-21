---
layout: page
permalink: /publications/
title: publications
#description: publications by categories in reversed chronological order.
years: [2026,2025,2024,2022,2021,2020,2018,2016,2015]
nav: true
---
[Google Scholar](https://scholar.google.com/citations?user=LrWKIb0AAAAJ)
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
