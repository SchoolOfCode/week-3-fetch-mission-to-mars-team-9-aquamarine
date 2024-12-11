// First, register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("ServiceWorker registration successful:", registration.scope);
    } catch (error) {
      console.error("ServiceWorker registration failed:", error);
    }
  });
}

// async function so that we can use the await keyword
async function submitCode() {
  try {
    // Your investigation code should go here
    // Leave your lines of code in when you find something out, so that you can always come back to it and see how you got there
    // const response = await fetch("/api/logs");

    // 0
    // : 
    // {date: '10/04/2099', activity: 'MISSION LAUNCH'}
    // 1
    // : 
    // {date: '23/09/3001', activity: 'TEAM MUTINY', result: 'Changed captain to be IT AI System', who: 12}
    // 2
    // : 
    // {date: '17/06/3010', activity: 'MEDICAL BREAKTHROUGH', result: 'Last person was vaccinated for Covid. Had a big party.', who: 4}
    // 3
    // : 
    // {date: '33/07/3011', activity: 'ENTERTAINMENT', info: 'Rewatched final episode of Line of Duty'}
    // 4
    // : 
    // {date: '14/07/3012', activity: 'CATASTROPHIC SPILLAGE', info: "Kyle's tea was once again the root of all our problems when it was spilt over the main console...", who: 7}
    // 5
    // : 
    // {date: '12/05/3015', activity: 'CHANGE LAUNCH CODES', who: 8}
    // 6
    // : 
    // {date: '23/10/3017', activity: 'BETRAYAL', info: 'Ate the last chocolate rations', result: 'Threatened with airlock expulsion', who: 3}
    // 7
    // : 
    // {date: '24/10/3017', activity: 'REDEMPTION', info: "Sincere apology; promise to scrub the ship's perso…s weekly until the next supplies shipment arrives", result: 'Allowed to remain onboard', who: 3}

    // const response = await fetch("/api/personnel/12");
    // {id: 1, species: 'Tiger', name: 'Lizzie', dateOfBirth: '02/09/2097'}
    // {id: 2, species: 'Human', name: 'James', dateOfBirth: '28/10/2075'}
    // {id: 3, species: 'Cat', name: 'Liz', dateOfBirth: '03/03/2092'}
    // {id: 4, species: 'Human', name: 'Tao', dateOfBirth: '04/15/2090'}
    // {id: 5, species: 'Shark', name: 'Max', dateOfBirth: '10/31/2091'}
    // {id: 6, species: 'Human', name: 'Anna-Marie', dateOfBirth: '14/02/2073'}
    // {id: 7, species: 'Fish', name: 'Kyle', dateOfBirth: '04/07/2095'}
    // {id: 8, species: 'Human', name: 'Chris', dateOfBirth: '01/01/2085'}
    // {id: 9, species: 'Monkey', name: 'Ben', dateOfBirth: '17/05/2094'}
    // {id: 10, species: 'Human', name: 'Joe', dateOfBirth: '15/01/2080'}
    // {id: 11, species: 'Dog', name: 'Rover', dateOfBirth: '05/12/2099'}
    // {id: 12, species: 'AI', name: 'IT AI System', dateOfBirth: '10/10/2052'}

    // const response = await fetch("/api/messages");
    // WARNING: "You can't view them all. Naughty naughty! Search for messages using the id of the recipient."
    
    // const response = await fetch("/api/messages?to=12");

// date: '18/08/3015', to: 1, from: 4, subject: 'Re: Assistance Needed', message: "It's a carrot, you plum!"}
// date: '20/09/3005', to: 3, from: 4, subject: 'URGENT REQUEST - MISSION CRITICAL', message: 'Have you seen my glasses?'
// date: '21/09/3005', to: 3, from: 4, subject: 'URGENT UPDATE - MISSION CRITICAL', message: 'Never mind. Found them.'
// date: '17/08/3015', to: 4, from: 1, subject: 'Assistance Needed', message: '3 across: Orange and sounds like a parrot? Any ideas?'
// date: '13/05/3015', to: 5, from: 2, subject: 'HANDS OFF MY GORGONZOLA', message: "If I've told you once, I've told you 1000 times...…se don't use it for your ham and cheese toasties!
// date: '15/05/3015', to: 5, from: 5, subject: 'Hello', message: 'I think the stress is getting to me. I am actually writing to myself.'
// date: '13/05/3015', to: 8, from: 12, subject: 'LAUNCH CODES: Weak Change', message: 'Why oh why did you change the launch codes to that…tly better if you ask me... which you never do :('
//date: '13/05/3015', to: 12, from: 9, subject: 'Recreation request', message: 'Add ping pong balls and bins to upcoming supply request.'

    const response = await fetch("/api/hint");

    // length: 5, type: 'string', rules: "It's so important, you have to make it UPPER CASE!"

    // perso…s …se that…tly (we thought this was the clue but turns out I copied the messages which were truncated)

  const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Wait for service worker to be ready before making requests
navigator.serviceWorker.ready
  .then(() => {
    submitCode(); // calls the function above to run your code
  })
  .catch((error) => {
    console.error("Service Worker not ready:", error);
  });
