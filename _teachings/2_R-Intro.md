---
layout: page
title: "Short Introduction to R (Tidyverse) — Crash Course"
description: "A three-part introductory course to R and the tidyverse, covering data management, visualization, and statistical analysis."
importance: 1
category: Teaching Notes
related_publications: false
---

## Course Description

This is a short three-part crash course on R and the tidyverse. The course was originally developed for the 2024 Yale Prediction Competition and is aimed at students who are new to R but may already have some familiarity with programming concepts or applied methods in the social sciences.

The course uses a single running example throughout all three sessions: the **Eurovision Song Contest voting dataset**. This makes it easy to follow the logic from data import to statistical model in one coherent workflow.

Each session consists of a slide deck, annotated teaching notes, and a set of exercises.

---

## Sessions

<div class="teaching-sessions">

  <div class="teaching-session">
    <div class="session-header">
      <span class="session-number">01</span>
      <div>
        <h3><a href="#">Data Management</a></h3>
        <p class="session-subtitle">Import, transform, summarise, join, and reshape data with the tidyverse</p>
      </div>
    </div>
    <div class="session-topics">
      <strong>Topics:</strong>
      R basics (objects, functions, RStudio) &middot;
      Packages &middot;
      Import &amp; export (CSV, TSV, RDS, SPSS, Stata) &middot;
      <code>glimpse()</code>, <code>arrange()</code>, <code>select()</code>, <code>filter()</code> &middot;
      <code>mutate()</code> with <code>if_else()</code> and <code>case_when()</code> &middot;
      <code>summarise()</code> and <code>group_by()</code> &middot;
      <code>left_join()</code> &middot;
      <code>pivot_longer()</code> and <code>pivot_wider()</code>
    </div>
    <div class="session-materials">
      <a href="https://www.dropbox.com/scl/fi/h060ukxlrun4oynljr5za/Session_1_Data_Management.pptx?rlkey=nzb5r30pbg4jz2a6y1y8auiu7&amp;st=vdy3u49k&amp;dl=0" class="material-link material-available"><i class="fas fa-person-chalkboard"></i> Slides</a>
      <a href="https://www.dropbox.com/scl/fi/yj5b58ruyineslbpupio1/01_Data-Management.Rmd?rlkey=12pmajn4r9kxdylr1j211s4t0&amp;st=di7dstu5&amp;dl=1" class="material-link material-available"><i class="fas fa-file-code"></i> Teaching Notes</a>
      <a href="#" class="material-link material-unavailable"><i class="fas fa-pencil"></i> Exercises</a>
    </div>
  </div>

  <div class="teaching-session">
    <div class="session-header">
      <span class="session-number">02</span>
      <div>
        <h3><a href="#">Visualization</a></h3>
        <p class="session-subtitle">Build expressive, publication-ready plots with ggplot2</p>
      </div>
    </div>
    <div class="session-topics">
      <strong>Topics:</strong>
      Grammar of Graphics &middot;
      <code>ggplot()</code>, <code>aes()</code>, geoms &middot;
      Bar charts, line charts, histograms, boxplots, scatterplots, heatmaps &middot;
      <code>facet_wrap()</code> &middot;
      Scales, labels, and themes &middot;
      Saving figures with <code>ggsave()</code>
    </div>
    <div class="session-materials">
      <a href="#" class="material-link material-unavailable"><i class="fas fa-person-chalkboard"></i> Slides</a>
      <a href="https://www.dropbox.com/scl/fi/hdr0jputywk6u9saucwet/02_Visualization.Rmd?rlkey=s3xa6qejcyc8xv42qailpkw70&amp;dl=1" class="material-link material-available"><i class="fas fa-file-code"></i> Teaching Notes</a>
      <a href="#" class="material-link material-unavailable"><i class="fas fa-pencil"></i> Exercises</a>
    </div>
  </div>

  <div class="teaching-session">
    <div class="session-header">
      <span class="session-number">03</span>
      <div>
        <h3><a href="#">Statistical Analysis</a></h3>
        <p class="session-subtitle">Estimate, report, and visualize linear and generalized linear models</p>
      </div>
    </div>
    <div class="session-topics">
      <strong>Topics:</strong>
      LM vs. GLM &middot;
      <code>lm()</code> and <code>glm()</code> &middot;
      Regression tables with <code>texreg</code> and <code>modelsummary</code> &middot;
      Coefficient plots with <code>modelplot()</code> &middot;
      Extracting results with <code>broom::tidy()</code> &middot;
      In-sample and out-of-sample predictions
    </div>
    <div class="session-materials">
       <a href="#" class="material-link material-unavailable"><i class="fas fa-person-chalkboard"></i> Slides</a>
      <a href="https://www.dropbox.com/scl/fi/ctsvr6l1bz7f02s6zy1s2/03_Analysis.Rmd?rlkey=82cvsrslpx0dh4s850hgxxegw&amp;dl=1" class="material-link material-available"><i class="fas fa-file-code"></i> Teaching Notes</a>
      <a href="#" class="material-link material-unavailable"><i class="fas fa-pencil"></i> Exercises</a>
    </div>
  </div>

</div>

<style>
.teaching-sessions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.teaching-session {
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  background: var(--global-card-bg-color);
}

.session-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.session-number {
  font-family: "Lora", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--global-theme-color);
  min-width: 2.2rem;
  line-height: 1.2;
}

.session-header h3 {
  margin: 0 0 0.15rem 0;
  font-size: 1.1rem;
}

.session-header h3 a {
  color: var(--global-text-color);
  text-decoration: none;
}

.session-header h3 a:hover {
  color: var(--global-theme-color);
  text-decoration: none;
}

.session-subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--global-text-color-light);
}

.session-topics {
  font-size: 0.875rem;
  color: var(--global-text-color-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.session-topics code {
  font-size: 0.8rem;
  background: var(--global-code-bg-color);
  padding: 0.1em 0.3em;
  border-radius: 3px;
  color: var(--global-text-color);
}

.session-materials {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.material-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  border: 1px solid var(--global-divider-color);
  text-decoration: none;
  transition: all 0.15s ease;
}

.material-available {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
}

.material-available:hover {
  background: var(--global-theme-color);
  color: white;
  text-decoration: none;
}

.material-unavailable {
  color: var(--global-text-color-light);
  border-color: var(--global-divider-color);
  cursor: default;
  opacity: 0.55;
  pointer-events: none;
}
</style>
