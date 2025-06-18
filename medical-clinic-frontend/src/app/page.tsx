export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Medical Clinic</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Patients</h2>
            <ul className="space-y-2">
              <li>✓ Book appointments online</li>
              <li>✓ View medical records</li>
              <li>✓ Get prescription updates</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Doctors</h2>
            <ul className="space-y-2">
              <li>✓ Manage appointments</li>
              <li>✓ Update patient records</li>
              <li>✓ Write prescriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
