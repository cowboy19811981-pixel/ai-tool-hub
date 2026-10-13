async function getOpenAI() {
  const url = 'https://raw.githubusercontent.com/openai/openai-python/main/src/openai/types/chat_model.py';
  const res = await fetch(url);
  if (res.ok) {
    const text = await res.text();
    const regex = /"([a-z0-9\.\-_]+)"/g;
    let match;
    const models = [];
    while ((match = regex.exec(text)) !== null) {
      if (match[1].startsWith('gpt-') || match[1].startsWith('o1') || match[1].startsWith('o3') || match[1].startsWith('chatgpt-')) {
        models.push(match[1]);
      }
    }
    console.log('OpenAI Official SDK Models:');
    console.log([...new Set(models)].join('\n'));
  } else {
    console.log('Failed:', res.status);
  }
}

getOpenAI();
