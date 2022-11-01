function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
        var kw = out[i];
        
        dom += `<div class="card mt-5 ">
        <div class="max-w-full rounded overflow-hidden shadow-sm bg-slate-50">
            <img class="object-cover w-full bg-center bg-cover h-96"
                src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}"
                alt="${kw}" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"><h3 class="capitalize"><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3></div>
                <p class="text-base text-gray-700 line-clamp-5">
                <b>${kw}</b> is one of best result for ${postTitle}. Everything in here is for references perpose only. Feel free to save and bookmark ${kw}
                </p>
            </div>
        </div>
    </div>`;
    }
}
