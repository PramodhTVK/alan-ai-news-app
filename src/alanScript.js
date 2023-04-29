intent('Get the news from $(item* (.*)) Category ',(p)=>{
    if(p.item.value === 'health' || p.item.value === 'sports' || p.item.value === 'business' || p.item.value === 'general'){
        p.play({ command : 'VoiceNews', data : p.item.value});
        p.play(`Fetching news on ${p.item.value} Category`);
    }
    else{
        p.play('Cannot get Data');
    }
})