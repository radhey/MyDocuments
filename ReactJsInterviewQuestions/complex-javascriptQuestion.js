///Synchronous callback with different timeout
const job1 = (cb) => {
  setTimeout(() => {
    cb("first");
  }, 500);
};

const job2 = (cb) => {
  setTimeout(() => {
    cb("second");
  }, 30);
};

const job3 = (cb) => {
  setTimeout(() => {
    cb("third");
  }, 900);
};

const jobs = [job1, job2, job3];

/**
 * Each of these jobs use setTimeout to simulate a long-running task.
 * Based on the code above, job2 will return first, followed by job1
 * and finally, job3 will return.
 *
 * Write a function called `asyncMap` that passes an array of job results
 * (in the same order in which they were originally passed in) to the final
 * callback e.g. ['first', 'second', 'third']
 */

const asyncMap = (jobs, done) => {
  const results = Promise.all(jobs.map((job) => new Promise(job)));
  done(results);
};

asyncMap(jobs, (results) => {
  console.log(results); // ['first', 'second', 'third']
});
////////////////////////////////other approach///////////////////////////////////////////

const job1 = (cb) => {
  setTimeout(() => {
    cb("first");
  }, 500);
};

const job2 = (cb) => {
  setTimeout(() => {
    cb("second");
  }, 30);
};

const job3 = (cb) => {
  setTimeout(() => {
    cb("third");
  }, 900);
};

const jobs = [job1, job2, job3];

/**
 * Each of these jobs use setTimeout to simulate a long-running task.
 * Based on the code above, job2 will return first, followed by job1
 * and finally, job3 will return.
 *
 * Write a function called `asyncMap` that passes an array of job results
 * (in the same order in which they were originally passed in) to the final
 * callback e.g. ['first', 'second', 'third']
 */

const asyncMap = (jobs, done) => {
  const results = Promise.all(jobs.map((job) => new Promise(job)));
  done(results);
};

asyncMap(jobs, (results) => {
  console.log(results); // ['first', 'second', 'third']
});
