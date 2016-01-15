$.extend($.easing,
    {
        def: 'easeOutQuad',
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

(function ($) {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    $.fn.navScroller = function (options) {
        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 700,
            activateParentNode: true
        }, options);
        navItems = this;

        //attatch click listeners
        navItems.on('click', function (event) {
            event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
            $('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeInOutExpo", function () {
                    disableScrollFn = false;
                }
            );
        });

        //populate lookup of clicable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw

        // setup scroll listener
        $(document).scroll(function () {
            if (disableScrollFn) {
                return;
            }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height) {
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        navItems.each(function () {
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode) ? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (nav in navs) {
            $(navs[nav]).removeClass('active');
        }
        $(navs[navID]).addClass('active');
    }
})(jQuery);


$(document).ready(function () {

    $('nav li a').navScroller();

    //section divider icon click gently scrolls to reveal the section
    $(".sectiondivider").on('click', function (event) {
        $('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "linear");
    });

    //links going to other sections nicely scroll
    $(".container a").each(function () {
        if ($(this).attr("href").charAt(0) == '#') {
            $(this).on('click', function (event) {
                event.preventDefault();
                var target = $(event.target).closest("a");
                var targetHight = $(target.attr("href")).offset().top;
                $('html,body').animate({scrollTop: targetHight - 170}, 800, "easeInOutExpo");
            });
        }
    });

});

$.dependents = function (callback) {
    return $.getJSON("assets/open-source-projects.json", callback);
    //return $.getJSON("https://api.github.com/search/repositories?q=intellij+OR+jetbrains+OR+kotlin+-%40jetbrains&per_page=100", callback);
};

$.kotlin = function (callback) {
    return $.getJSON("assets/kotlin-projects.json", callback);
    //return $.getJSON("https://api.github.com/search/repositories?q=kotlin+-%40jetbrains+language:kotlin&sort=stars", callback);
};

$.mostPopular = function (username, callback) {
    return $.getJSON("assets/repos.json", callback);
    //return $.getJSON("https://api.github.com/search/repositories?q=%40" + username, callback);
};

$.statistics = function (username, repo, callback) {
    return $.getJSON("assets/" + repo + "-stats.json", callback);
    //return $.getJSON("https://api.github.com/repos/" + username + "/" + repo + "/stats/contributors", callback);
};

$.pullRequests = function (username, repo, callback) {
    return $.getJSON("assets/" + repo + "-PRs.json", callback);
    //return $.getJSON("https://api.github.com/repos/" + username + "/" + repo + "/pulls?per_page=100&state=closed", callback);
};

$.youtrack = function (callback) {
    return $.getJSON("assets/temp.json", callback);
    //return $.getJSON("https://youtrack.jetbrains.com/rest/issue?filter=%23IDEA+%23MPS+%23Kotlin+%23PyCharm+%23Unresolved+%23Bug+sort+by%3A+votes+desc&with=summary&with=votes&with=updated&with=reporterName&max=500", callback);
};

var jetbrains = {
    dependents: [],
    totalDependents: 3000,
    yearlyTotalCommits: 0,
    kotlinProjects: [],
    projects: {},
    repositories: ["intellij-community", "kotlin", "anko", "ideavim", "MPS", "Nitra", "intellij-scala", "intellij-plugins", "la-clojure", "colorSchemeTool", "phpstorm-workshop", "FSharper", "Grammar-Kit", "resharper-angularjs", "workshop-jb", "meta-runner-power-pack", "intellij-haxe", "phpstorm-stubs", "spek", "resharper-nuget", "kotlin-examples", "xodus", "intellij-sbt"],
    jetbrainers: ["abreslav", "Alefas", "alexander-doroshko", "alexander-lobas", "AMPivovarov", "alexeypegov", "anna239", "anstarovoyt", "ArtemGovorov", "asedunov", "ashatalin", "avokin", "bashor", "BasLeijdekkers", "batya239", "belarusian", "belovrv", "boogiecat", "boot85", "breandan", "bulenkov", "chashnikov", "cheptsov", "ChShersh", "Chushuhuch", "citizenmatt", "controlflow", "CrazyCoder", "cy6erGn0m", "cy6erskunk", "dboulytchev", "deadok22", "denis-zhdanov", "denofevil", "derigel23", "develar", "dmekhanikov", "dmitry-avdeev", "dmitry-treskunov", "dnpetrov", "dovchinnikov", "dzharkov", "east825", "ekoshkin", "erokhins", "Eugene-Kudelevsky", "eugenezh", "EvilTosha", "geevee", "goodwinnk", "gorrus", "gregsh", "hhariri", "ignatov", "ilya-g", "ilya-klyuchnikov", "IlyaKazakevich", "Iris24", "iromeo", "jamesbrain", "JamesKovacs", "JB-Dmitry", "jonnyzzz", "juliabeliaeva", "katepol", "kir", "kirelagin", "klikh", "kradima", "ktisha", "leo-from-spb", "Leonya", "leostryuk", "lepenkinya", "ligee", "Linfar", "Lugzan", "maksimr", "matkoch", "maxim5", "max-kammerer", "maxmanuylov", "maxmedvedev", "mazine", "medvector", "mglukhikh", "MichaelNedzelsky", "mikhailvink", "morj", "NadyaZabrodina", "NataliaUkhorskaya", "nesteruk", "neuro159", "nicity", "NikolayPianikov", "niktrop", "nskvortsov", "olegs", "olegstepanov", "orangy", "orybak", "os97673", "paksv", "pauleveritt", "pavelfatin", "pavelsher", "pchel-", "penemue", "pTalanov", "rayshade", "satamas", "sayon", "segrey", "SergeyZh", "shafirov", "shalupov", "solomatov", "someone-with-default-username", "stigger", "svtk", "topka", "traff", "trespasserw", "trishagee", "tsvtkv", "udalov", "ulitink", "valentinkip", "valich", "varsy", "VladRassokhin", "vladsoroka", "vlasovskikh", "ww898", "yanex", "YannCebron", "yole", "zajac", "zanyato", "zarechenskiy", "zolotov"],
    jetContributors: [],
    topContributors: [],
    topReporters: {},
    topIssues: new List('topIssues', {
        valueNames: ['link', 'summary', 'updated', 'reporter', 'votes'],
        item: '<li><span class="summary"></span> :: <span class="votes"></span> votes</li>',
        page: 5
    })
};

$.fn.loadStatistics = function (username) {
    var statistics, popular;

    $.mostPopular("jetbrains", function (data) {
        popular = data.items.slice(0, 3);

        var promises = [];
        statistics = [];
        $.each(popular, function (i, n) {
            var repo_name = n.name;
            promises.push($.statistics(username, repo_name, function (data) {
                if (jetbrains.projects[repo_name] == undefined) {
                    jetbrains.projects[repo_name] = {};
                }
                jetbrains.projects[repo_name].statistics = data;
            }));
            promises.push($.pullRequests(username, repo_name, function (data) {
                if (jetbrains.projects[repo_name] == undefined) {
                    jetbrains.projects[repo_name] = {};
                }
                jetbrains.projects[repo_name].pullRequests = data;
            }));
        });

        promises.push($.youtrack(function (data) {
            jetbrains.topIssues.clear();
            jetbrains.topReporters = {};
            $.each(data.issue, function (i, n) {
                var issueId = n.id;
                var summary = n.field[0].value;
                var updated = n.field[1].value;
                var reporter = n.field[2].value;
                var votes = n.field[3].value;

                jetbrains.topIssues.add({
                    link: "https://youtrack.jetbrains.com/issue/" + issueId,
                    summary: '<a href=https://youtrack.jetbrains.com/issue/' + issueId + '>' + summary + '</a>',
                    updated: updated,
                    reporter: reporter,
                    votes: votes
                });

                if (jetbrains.topReporters[reporter] == undefined) {
                    jetbrains.topReporters[reporter] = 0;
                }

                jetbrains.topReporters[reporter]++;
            });
        }));

        promises.push($.dependents(function (data) {
            $.each(data.items, function (i, n) {
                jetbrains.totalDependents = data.total_count;
                jetbrains.dependents.push({
                    name: n.full_name,
                    description: n.description
                });
            });
        }));

        promises.push($.kotlin(function (data) {
            $.each(data.items, function (i, n) {
                jetbrains.totalKotlinProjects = data.total_count;
                jetbrains.kotlinProjects.push({
                    name: n.full_name,
                    description: n.description
                });
            });
        }));

        $.when.apply($, promises).done(function () {
            var contributors = [];
            $.each(jetbrains.projects, function (i, n) {
                contributors = contributors.concat(n.statistics);
            });

            var extStatistics = [], intStatistics = $.grep(contributors, function (item) {
                var isInternal = $.inArray(item.author.login, jetbrains.jetbrainers) >= 0;
                if (!isInternal) {
                    extStatistics.push(item);
                    if (jetbrains.jetContributors.indexOf(item.author.login) < 0) {
                        jetbrains.jetContributors.push(item.author.login);
                    }
                }

                return isInternal;
            });

            $("#totalcontributors").text(jetbrains.jetContributors.length + jetbrains.jetbrainers.length);
            $("#externalcontributors").text(jetbrains.jetContributors.length);

            $.each(intStatistics, function () {
                var weeksLastYear = this.weeks.slice(this.weeks.length - 52, this.weeks.length);
                $.each(weeksLastYear, function () {
                    jetbrains.yearlyTotalCommits += this.c;
                });
            });

            $("#yearlycommits").text(jetbrains.yearlyTotalCommits);

            //Top external contributors

            var extContrib = {};
            $.each(extStatistics, function () {
                var name = this.author.login;
                if (extContrib[name] == undefined) {
                    extContrib[name] = 0;
                }

                var weeksLastYear = this.weeks.slice(this.weeks.length - 52, this.weeks.length);
                $.each(weeksLastYear, function () {
                    extContrib[name] += this.c;
                });
            });

            var topContrib = Object.keys(extContrib).sort(function (a, b) {
                return extContrib[b] - extContrib[a];
            });

            $("#leaderboard ul").empty();
            $.each(topContrib.slice(0, 10), function () {
                var committer = {};
                committer[this] = extContrib[this];
                jetbrains.topContributors.push(committer);
                $("#leaderboard ul").append('<li><a href="https://github.com/' + this + '">' + this + '</a> has contributed over ' + extContrib[this] + ' commits to JetBrains\' software. ' + '</li>');
            });

            //Top Issue Reporters

            var topReporters = Object.keys(jetbrains.topReporters).sort(function (a, b) {
                return jetbrains.topReporters[b] - jetbrains.topReporters[a];
            });

            $("#leaderboard-reporters ul").empty();
            $.each(topReporters.slice(0, 13), function () {
                $("#leaderboard-reporters ul").append('<li>' + this + '</li>');
            });

            //Recently merged pull requests

            var mergedPulls = $.map(jetbrains.projects, function (project) {
                return $.grep(project.pullRequests, function (pullRequest) {
                    return pullRequest.merged_at != null &&
                        jetbrains.jetbrainers.indexOf(pullRequest.user.login) < 0;
                });
            });

            mergedPulls.sort(function (a, b) {
                return b.merged_at.localeCompare(a.merged_at);
            });

            $("#merged_pulls ul").empty();
            $.each(mergedPulls, function () {
                $("#merged_pulls ul").append('<li><a href="' + this.html_url + '">' + this.title + '</a> by <a href="https://github.com/' + this.user.login + '">' + this.user.login + '</a> was merged ' + timeSince(new Date(this.merged_at)) + ' ago.</li>');
            });

            $("#totaldependents").text(jetbrains.totalDependents);

            $("#dependents ul").empty();
            $.each(jetbrains.dependents.slice(0, 10), function () {
                $("#dependents ul").append('<li><a href="https://github.com/' + this.name + '">' + this.name + '</a> - ' + this.description + '</li>');
            });

            $("#total-kotlin-projects").text(jetbrains.totalKotlinProjects);

            $("#kotlin-projects ul").empty();
            $.each(jetbrains.kotlinProjects, function () {
                $("#kotlin-projects ul").append('<li><a href="https://github.com/' + this.name + '">' + this.name + '</a> - ' + this.description + '</li>');
            });
        });
    });
};

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

