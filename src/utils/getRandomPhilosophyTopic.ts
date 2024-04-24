import crypto from 'crypto';

export const getRandomPhilosophyTopic = (circleCode: string) => {
    const topics = [
  'In substance dualism, how does Descartes differentiate between mental states and physical states, and what implications does this distinction have for the mind-body relationship?',
  'How does substance dualism explain the interaction between the mind and body, and what role does the pineal gland play in this interaction, according to Descartes?',
  'What are the primary arguments for substance dualism, and how do they support the idea of the mind and body as distinct substances?',
  'Critically analyze Descartes\'s view of substance dualism, particularly in relation to the epistemological distinction between the mind and body.',
  'How does Leibniz\'s parallelism propose a different approach to understanding the relationship between mental and material events compared to substance dualism?',
  'What is the role of God in Leibniz\'s parallelism, and how does it affect the parallel nature of mental and material events?',
  'Discuss the main critiques of parallelism, particularly concerning its compatibility with the concept of causal closure in the natural world.',
  'What are the core principles of occasionalism, and how do they redefine the concept of causality between mental and material events?',
  'How does occasionalism challenge traditional notions of causality, and what role does continuous creation by God play in this theory?',
  'Critically evaluate occasionalism, particularly in relation to its ability to account for the interaction between mental and material events.',
  'In idealism, how does the assertion that reality is fundamentally mental differ from substance dualism and materialism?',
  'Discuss the concept of primary and secondary qualities in idealism and their implications for our subjective experience of reality.',
  'Critique idealism, focusing on its reliance on subjective perceptions and its challenge to the concept of objective reality.',
  'What are the main principles of functionalism, and how does this theory define mental states based on their functional roles?',
  'Explain the concept of functional kinds in functionalism and how it applies to the classification of mental states.',
  'Critically analyze functionalism, particularly concerning its classification of mental states and its neglect of qualitative aspects.',
  'How does epiphenomenalism propose a different understanding of the relationship between mental and material events compared to substance dualism?',
  'Discuss the concept of mental byproducts in epiphenomenalism and their relationship to physical events.',
  'Critique epiphenomenalism, particularly in relation to its compatibility with the principle of causal closure in the natural world.',
  'What are the core principles of behaviorism, and how do they differ from substance dualism and idealism?',
  'Explain the difference between crude behaviorism and refined behaviorism, particularly regarding their definitions of psychological states.',
  'Critically evaluate behaviorism, focusing on its understanding of the mind-body relationship and consciousness.',
  'In materialism, how does the assertion that all things, including mental states, are results of material interactions differ from substance dualism and idealism?',
  'Discuss the differences between reductive materialism and eliminative materialism in their explanations of mental states.',
  'Critically analyze materialism, focusing on its ability to account for subjective experiences and consciousness.',
  'How does materialism address the concept of causality in the mind-body relationship, and what are its implications for free will?',
  'Compare and contrast the role of God in substance dualism, occasionalism, and idealism.',
  'Evaluate the extent to which each mind-body theory can account for subjective experiences and consciousness.',
  'Discuss the concept of causality within each mind-body theory and its impact on our understanding of mental and material events.',
  'Critically analyze the role of empirical evidence in supporting or refuting each mind-body theory and discuss the limitations of empirical methods in addressing philosophical questions.',
  'Compare the explanatory power of each mind-body theory in accounting for the relationship between mental and material phenomena.',
  'Discuss the implications of each mind-body theory for interdisciplinary fields such as neuroscience, psychology, and philosophy of science.',
  'How do cultural and historical contexts influence the development and acceptance of each mind-body theory?',
  'Evaluate the ethical implications of each mind-body theory, particularly concerning issues such as determinism, autonomy, and the nature of suffering.',
  'Discuss the potential for integration or synthesis of multiple mind-body theories to provide a comprehensive understanding of the mind-body relationship.',
  'How does language and conceptual frameworks shape our understanding of the mind-body problem across each theory?',
  'Discuss the implications of each mind-body theory for the practice of mental health care, including diagnosis, treatment, and the understanding of psychiatric disorders.',
  'How do advancements in technology and scientific methodology influence our understanding and assessment of each mind-body theory?',
  'Evaluate the role of intuition, introspection, and logical reasoning in supporting or challenging the assumptions of each mind-body theory.',
  'Discuss the potential implications of each mind-body theory for future philosophical inquiry and scientific research.',
  'Compare the implications of each mind-body theory for our understanding of subjective experiences such as pain, pleasure, and emotion.',
  'Critically analyze the role of consciousness within each mind-body theory, considering whether it is seen as an emergent property or a fundamental aspect of reality.',
  'Discuss the relationship between each mind-body theory and broader philosophical frameworks such as metaphysics, ethics, and epistemology.',
  'Evaluate the extent to which each mind-body theory aligns with empirical evidence from fields such as neuroscience, psychology, and cognitive science.',
  'Discuss the implications of each mind-body theory for our understanding of human uniqueness and the potential for non-human consciousness.'
    ]
    
  
  const hash = crypto.createHash('sha256');
  hash.update(circleCode);
  const hashValue = hash.digest('hex');
  const index = parseInt(hashValue, 16) % topics.length;
  return topics[index];  

}
