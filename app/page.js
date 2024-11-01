"use client"
import GoToNotesButton from "./components/goToNotes";
import ThemeSwitch from "./components/themeSwitch";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-textPrimary">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to 🐠MoiDo App</h1>
      <div className="flex gap-3">
        <ThemeSwitch theme="dark" bg="bg-gray-950" />
        <ThemeSwitch theme="light" bg="bg-white" />
        <ThemeSwitch theme="purple" bg=" bg-purple-900" />
        <ThemeSwitch theme="blue" bg=" bg-blue-900" />
      </div>
      <p className="text-lg mb-6 text-center">Explore this simple To-Do app and take notes very demurely.</p>
      <GoToNotesButton />
    </main>

  );
}
