import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Experiences from './Experiences.jsx';
import ContactMe from './ContactMe.jsx';
import Journal from './Journal.jsx';
import NavBar from './NavBar';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: [{
        title: 'test1',
        author: 'lina',
        body: `Oh, it's just me, myself and I
Solo ride until I die
Cause I got me for life
(Got me for life, yeah)
Oh I don't need a hand to hold
Even when the night is cold
I got that fire in my soul
And as far as I can see I just need privacy
Plus a whole lot of tree fuck all this modesty
I just need space to do me get a world that they're tryna see
A stellar max flow right beside of me
A Ferrari I'm buyin' three
A closet of Saint Laurent, get what I want when I want
Cause hunger is driving me, yeah
I just need to be alone, I just need to be at home
Understand what I'm speaking on if time is money I need a loan
But regardless I'll always keep keepin' on
Fuck fake friends, we don't take L's we just make M's
While y'all follow, we just make trends
I'm right back to work when that break ends
Oh, it's just me, myself and I
Solo ride until I die
Cause I got me for life
(Got me for life, yeah)
Oh I don't need a hand to hold
Even when the night is cold
I got that fire in my soul
I don't need anything to get me through the night
Just the beat that's in my heart
Yeah, it's keeping me alive
(Keeps me alive)
I don't need anything to make me satisfied (you know)
Cause the music fills me good and it gets me every time
Yeah, and I don't like talking to strangers
So get the fuck off me I'm anxious
I'm tryna be cool but I might just go ape shit
Say fuck y'all to all of y'all faces
It changes though now that I'm famous
Everyone knows how this lifestyle is dangerous
But I love it the rush is amazing
Celebrate nightly and everyone rages
I found how to cope with my anger
I'm swimming in money
Swimming in liquor my liver is muddy
But it's all good I'm still sippin' this bubbly
This shit is lovely, this shit ain't random, I didn't get lucky
Made it right here cause I'm sick with it Cudi
They all take the money for granted
But don't want to work for now tell me, isn't it funny?
Oh, it's just me, myself and I
Solo ride until I die
Cause I got me for life
(Got me for life, yeah)
Oh I don't need a hand to hold
Even when the night is cold
I got that fire in my soul
I don't need anything to get me through the night
Just the beat that's in my heart
Yeah, it's keeping me alive
(Keeps me alive)
I don't need anything to make me satisfied (you know)
Cause the music fills me good and it gets me every time
Like ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Cause the music fills me good and it gets me every time
Yeah, lonely nights I laid awake
Pray to lord, my soul to take
My heart's become too cold to break
Know I'm great but I'm broke as hell
Having dreams that I'm folding cake
All my life I've been told to wait
But I'mma get it now it's no debate
Oh, it's just me, myself and I
Solo ride until I die
Cause I got me for life
(Got me for life, yeah)
Oh I don't need a hand to hold
Even when the night is cold
I got that fire in my soul
I don't need anything to get me through the night
Just the beat that's in my heart
Yeah, it's keeping me alive
(Keeps me alive)
I don't need anything to make me satisfied (you know)
Cause the music fills me good and it gets me every time
Like ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Ba-ba-ba-ba-da-ba
Ba-ba-ba-da-ba
Cause the music fills me good and it gets me every time`,
        comments:[{}],
        date: 'Jan, 1, 2018',
        hidden: false
      }, {
        title: 'test2',
        author: 'linaa',
        body: 'tesfadst tedfafasdfast fdastest test dasftesttttt',
        comments:[{}],
        date: 'Jan, 21, 2018',
        hidden: false
      }, {
        title: 'test3',
        author: 'lina',
        body: '==================.....=====',
        comments:[{}],
        date: 'Jan, 13, 2018',
        hidden: false
      }],
      selectedJournal: {},
    }
    this.updateJournals = this.updateJournals.bind(this);
    this.updateSelectedJournal = this.updateSelectedJournal.bind(this);
  }

  updateJournals(journals) {
    this.setState({ journals });
  }

  updateSelectedJournal(selectedJournal) {
    this.setState({ selectedJournal });
  }

  render() {
    return (
       <MuiThemeProvider>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route path="/about" render={()=><About />} />
            <Route path="/resume" render={()=><Experiences />} />
            <Route path="/contact" render={()=><ContactMe />} />
            <Route path="/journal" render={()=><Journal
              journals={this.state.journals}
              updateJournals={this.updateJournals}
              updateSelectedJournal={this.updateSelectedJournal}
            />} />
            <Route path="/journalPage" render={()=><JournalEntryPage
              selectedJournal={this.state.selectedJournal}
              journals={this.state.journals}
              updateSelectedJournal={this.updateSelectedJournal}
             />} />
          </Switch>
        </div>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;