---
layout: post
title: Nuclear forensics with computer vision
tag: research
dateline: Written 2023 Apr 08. Work performed throughout 2022.
description: using vector quantizing variational autoencoders to classify plutonium oxides
math: true
links:
 - name: Read the paper here
   url: https://arxiv.org/abs/2212.00887
---

The last project I completed while working full-time at PNNL was an experimental data science project. My team and I were investigating whether a vector quantizing variational quantizer (VQ-VAE) could be used to perform nuclear forensics; e.g. given an image of plutonium oxide residues, what could we tell about how the plutonium was created? This has obvious applications for national security, but was also interesting from a data science perspective, as computer vision-based approaches are still quite novel in nuclear forensics.

For this project, I functioned mostly as the chief experimenter and designer of the analysis pipeline. I developed an automated pipeline for preprocessing the microscope images, cropping the images down to individual particles and subtracting out any background. After this pipeline, we trained a VQ-VAE to produce embeddings from these images using only a reconstruction loss. We also applied arbitrary rotations to the images during training in order to ensure that the embeddings were rotation-invariant.

With these VQ-VAE embeddings, I developed an analysis pipeline that included a simple, fully-connected feed-forward network that gradually reduced the dimensionality of the embeddings down to $$\mathcal{O}(10)$$ dimensions. After this dimension-reducing step, I developed a network to perform multiple classification tasks simultaneous. Namely, the network consists of seven parallel linear networks, outputting a $$7 \times 3$$ matrix of likelihoods. Starting from the VQ-VAE embeddings, the entire rest of the pipeline (dimension-reduction into parallel predictions network) was trained together as a single unit. The result is that the dimension-reduction parts of the network produce a new embedding: one that is dimension-reduced and contains _only_ the information needed for the classification tasks.

I also experimented with a similar "task-specific clustering" approach, including an additional vector quantizer layer in the predictive network after the dimension-reduction steps. This vector quantizer had the effect of reducing the space of allowed secondary embeddings from $$\mathbb{R}^b$$ (for some dimensionality $$b$$) to a space of only $$c$$ specific vectors in $$\mathbb{R}^b$$ (where $$c$$ is an integer). As such, the vector quantizer functions as a sort of clustering algorithm, subject to the constraint that the clusters are determined according to what best optimizes some loss function.

While a single vector quantizer did not produce fantastic results, we had greater success using two vector quantizers in a hierarchy. Hence, we can map particles from images into a simple two-layer taxonomy, where the taxonomy is trained on a classification task with respect to the process parameters that created the particles. This data-driven taxonomy is, as far as we are aware, the first of its kind.

I had a lot of fun working on this project, experimenting with novel data scientific approaches. In particular, it was a great change of pace to approach a problem almost completely blindly. In physics, the parameter space of possible solutions to data science problems is usually quite restricted, as there are a number of principled approaches to tackling most problems, and ignoring these is a recipe for failure. Here, however, there was little in the way of an existing 'principled' approach, leaving us nearly complete freedom to try any data scientific we could think of. The result was an architecture that I haven't yet seen elsewhere (task-specific dimension reduction and clustering, as well as multiple multi-class classification), and that I think has greatly informed the way I will think about problems _like_ this in the future.
