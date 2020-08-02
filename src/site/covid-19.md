---
title: Ivan & Stacy - COVID-19
layout: layouts/hero.njk
---

<div class="page">
    <div class="container">
        <div class="Olive" style="background-image: url(/images/olive.png); margin-top: 3em;"></div>
        <h2>COVID-19 Precautions and Contingencies</h2>
        <p>The safety of our loved ones is our top priority, even higher than having a wedding. These are difficult times, and we are really sorry to have to inconvenience our guests with so much uncertainty on our special day. However, one thing is certain: we will not have a wedding unless we can have it safely for everyone involved. </p>
        <p>From that caution, we will:</p>
        <ul style="text-align:left; max-width: 600px;margin: 0 auto;">
            <li>Limit in-person attendees to both ceremony and reception to enable proper social distancing</li>
            <li>Move as many activities outdoors as possible</li>
            <li>Provide masks for all guests&mdash;optional use outdoors, required indoors</li>
            <li>Provide hand sanitizer aplenty</li>
            <li>Ensure food is handled in the safest way possible</li>
        </ul>
        <p>We are considering other plans as well, including having a drive-by reception where guests can swing by and say hello. Regardless of what may happen, we really hope to be able to share that special day with all of you in some form or another.</p>
        <h2 id="plans">Change of Plans</h2>
        <p>As the day approaches and we can more confidently make final decisions, we will personally keep all guests updated. Additionally, we will post all finalized plans here on this website as they are decided. <span id="countdown-text"></span></p>
        <p>For now, we recommend that guests <span class="u-textHighlight">do not book accommodations or travel.</span> We will be finalizing the location of the wedding and reception by the 8<sup>th</sup> of August, after which you may make the most informed decision.</p>
        <p class="js-countdown-text"></p>
        <h2 id="live-stream">Live Streaming</h2>
        <p>Because many people may not be able to attend due to health concerns or international travel bans, we will be streaming the ceremony. Keep an eye on this website, where a link and instructions will be posted.</p>
    </span>
</div>
<script>
    (function () {
        var els = document.querySelectorAll('.js-countdown-text');
        if (!els || els.length === 0) { return; }
        for (var el of els) {
            var weddingDatePlusOne = new Date('2020-09-20');
            var now = new Date();
            now.setHours(0, 0, 0);
            var days = Math.floor((weddingDatePlusOne - now) / 1000 / 60 / 60 / 24);
            var plural = days !== 1;
            var modifier = days <= 10 ? ' only' : ''
            var verb = plural ? 'are' : 'is';
            if (days > 0) {
                el.textContent = 'There ' + verb + modifier + ' ' + days + ' day' + (plural ? 's' : '') + ' until the wedding!';
            } else if (days === 0) {
                el.textContent = "Today is the big day! It's TODAY!"
            }
        }
    })();
</script>
