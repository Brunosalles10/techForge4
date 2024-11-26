abstract class VoteSystem {


    
    abstract voteFor(candidate: string): void;

    abstract getResults(): object
}

class Election extends VoteSystem {
    private votes: { [candidate: string]: number } = {};

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): { [candidate: string]: number } {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: { candidate: string; votes: number }[] = [];

    voteFor(candidate: string): void {
        const existingCandidate = this.votes.find(c => c.candidate === candidate);
        if (existingCandidate) {
            existingCandidate.votes++;
        } else {
            this.votes.push({ candidate, votes: 1 });
        }
    }

    getResults(): { candidate: string; votes: number }[] {
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
