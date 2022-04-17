import React from 'react';
import profile from '../../images/rijon.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about text-center mt-3 container'>
      <img src={profile} alt="" />
      <h2 className='my-3'>Rijon Ahmed</h2>
      <p>আমার আগামী ৪/৫ মাস এর মুল উদ্দেশ্য হলঃ আমি আমাকে ওয়েব ডেভলপার হিসেবে নিজেকে প্রতিষ্ঠিত করা। এবং একটা ভালো প্রতিষ্ঠানে চাকরি করা। আমি মনে করি এই লক্ষ্যে পৌঁছাতে হলে আমাকে অনেক বেশি হার্ড ওয়ার্ক করতে হবে। আমি নিজেও বিশাস করি কোন একটা জিনিস এর পিছনে লেগে থাকলে ঐ জিনিস টা অর্জন হবেই। তাই আমি আগামী ৪/৫ মাস লেগে থাকার পাশাপাশি পরিশ্রম করে যাবো। ইনশাআল্লাহ এই পরিশ্রম এবং লেগে থাকার মাধ্যমে আমি আমার লক্ষ্যে পৌঁছাতে পারবো।</p>

    </div>
  );
};

export default About;