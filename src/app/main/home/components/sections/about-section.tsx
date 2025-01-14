'use client';

export default function AboutSection() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="dark:bg-white bg-black text-white text-2xl w-1/2 p-2 md:text-5xl font-bold dark:text-black">
                        About me.
                    </p>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed dark:text-white">
                        Hi, I’m <span className="font-semibold text-red-400 dark:text-red-600">Anh Tu</span>.
                        I’m passionate about <span className="italic">web development</span> and dedicated to
                        <span className="italic"> building efficient, scalable, and innovative solutions for modern challenges</span>.
                    </p>
                    <p className="mt-4 dark:text-white leading-relaxed">
                        I specialize in frontend development using <span className="font-medium text-blue-400 dark:text-blue-600">React</span>,
                        <span className="font-medium text-blue-400 dark:text-blue-600"> Next.js</span>, and
                        <span className="font-medium text-blue-400 dark:text-blue-600"> TypeScript</span>, as well as backend integration with
                        <span className="font-medium text-green-400 dark:text-green-600"> Node.js</span> and
                        <span className="font-medium text-green-400 dark:text-green-600"> RESTful APIs</span>.
                    </p>
                    <p className="mt-4 dark:text-white leading-relaxed">
                        I’m always eager to learn about emerging technologies, improve my craft, and collaborate with
                        like-minded professionals to create impactful projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
