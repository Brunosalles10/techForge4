"use strict";
class VoteSystem {
}
class Election extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = {};
    }
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = [];
    }
    voteFor(candidate) {
        const existingCandidate = this.votes.find(c => c.candidate === candidate);
        if (existingCandidate) {
            existingCandidate.votes++;
        }
        else {
            this.votes.push({ candidate, votes: 1 });
        }
    }
    getResults() {
        return this.votes.sort((a, b) => b.votes - a.votes);
    }
}
const eleicao = new Election();
eleicao.voteFor('bruno');
eleicao.voteFor('Bob');
eleicao.voteFor('bruno');
const results = eleicao.getResults();
console.log(results);
const p = new Poll();
p.voteFor('bruno');
p.voteFor('silva');
p.voteFor('bruno');
const pollResults = p.getResults();
console.log(pollResults);
