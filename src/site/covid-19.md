---
title: Ivan & Stacy - COVID-19
layout: layouts/hero.njk
---

<div class="page CovidPage">
    <div class="container">
        <div class="Olive" style="background-image: url(/images/olive.png); margin-top: 3em;"></div>
        <h2>The Best Wedding Gift</h2>
        <p>The safety of our loved ones is our top priority. These are difficult times, and we are really sorry to have to inconvenience our guests with so much uncertainty on our special day. However, one thing is certain: we will only have a wedding that is safe for everyone involved.</p>
        <p>Even after all our precautions, we cannot ensure that you will not contract COVID-19 at our wedding. If you do not feel comfortable attending, the best wedding gift you can give us is not attending in person. If you feel unwell, are coughing or running a fever, or have been exposed to someone with COVID-19 in the past two weeks, we also ask you to please join us via <a href="#live-stream">live stream</a> and not attend in person.</p>
        <h2 id="plans">Change of Plans: Venue Location</h2>
        <p>We found a new venue! <a href="https://goo.gl/maps/W7Fx4BSjTbgpr1J87">The Ivy Place in Lancaster, South Carolina</a> is a lovely outdoor space full of nature and open air. Guests can now feel free to <a href="/accommodations">book accommodations and travel</a>.</p>
        <p>Due to the fluid nature of this situation and time constraints, we will not be reserving wedding blocks.</p>
        <h2>COVID-19 Precautions and Contingencies</h2>
        <p></p>
        <p>On the wedding day, we will be taking the following precautions:</p>
        <ul style="text-align:left;margin: 0 0 0 2rem">
            <li>Limit in-person attendees to both ceremony and reception</li>
            <li>Have all activities outdoors or under the large, open air tent</li>
            <li>Provide masks and hand sanitizer for all guests. We ask that masks be worn except when eating.</li>
            <li>Group guests at reception tables to limit unnecessary exposure</li>
            <li>Ensure food is handled in the safest way possible</li>
        </ul>
        <h2 id="live-stream">Live Streaming</h2>
        <p>Because many people may not be able to attend due to health concerns or international travel restrictions, we will be streaming the ceremony. Keep an eye on this website. A link and instructions will be posted here as we move closer to the date.</p>
    </span>
</div>
<script>
    (function () {
        var els = document.querySelectorAll('.js-countdown-text');
        if (!els || els.length === 0) { return; }
        for (var el of els) {
            var weddingDate = new Date('2020-09-19T00:00:00-0400');
            var now = new Date();
            now.setHours(0, 0, 0);
            var days = Math.floor((weddingDate - now) / 1000 / 60 / 60 / 24);
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
