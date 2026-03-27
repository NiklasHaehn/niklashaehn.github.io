---
layout: page
title: Teaching
permalink: /teaching/
description: 
nav: true
nav_order: 3
display_categories: [Teaching Assistant, Teaching Notes, Teaching Tools]
horizontal: false
---

<!-- pages/teaching.md -->
<div class="projects teachings">
{% if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categorized teachings -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_teachings = site.teachings | where: "category", category %}
  {% assign sorted_teachings = categorized_teachings | sort: "importance" %}
  <!-- Generate cards for each teaching -->
  <div>
    {% for teaching in sorted_teachings %}
      {% include teachings.liquid %}
    {% endfor %}
  </div>
  {% endfor %}

{% else %}

<!-- Display teachings without categories -->

{% assign sorted_teachings = site.teachings | sort: "importance" %}

  <!-- Generate cards for each teaching -->

<div>
  {% for teaching in sorted_teachings %}
    {% include teachings.liquid %}
  {% endfor %}
</div>
{% endif %}
</div>
