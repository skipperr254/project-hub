import React, { useState } from 'react';
import { Bell, Lock, Globe, Palette, Users, CreditCard, HelpCircle, Moon, Sun } from 'lucide-react';

export function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    taskAssigned: true,
    taskCompleted: true,
    mentions: true,
    updates: false,
    newsletter: false
  });

  const [pushNotifications, setPushNotifications] = useState({
    taskAssigned: true,
    taskCompleted: false,
    mentions: true,
    updates: true
  });

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </header>

      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Profile Settings</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="h-20 w-20 rounded-full"
                />
                <div className="ml-6">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Change Photo
                  </button>
                  <button className="ml-4 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Remove
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    defaultValue="Alice"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    defaultValue="Johnson"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    defaultValue="alice@example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Notification Preferences</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                  <div className="mt-4 space-y-4">
                    {Object.entries(emailNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setEmailNotifications(prev => ({
                            ...prev,
                            [key]: e.target.checked
                          }))}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label className="ml-3 text-sm text-gray-700">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                  <div className="mt-4 space-y-4">
                    {Object.entries(pushNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setPushNotifications(prev => ({
                            ...prev,
                            [key]: e.target.checked
                          }))}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label className="ml-3 text-sm text-gray-700">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Palette className="h-5 w-5 text-gray-400" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Appearance</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Dark Mode</h3>
                  <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-200"
                >
                  <span className="sr-only">Toggle dark mode</span>
                  <span
                    className={`${
                      darkMode ? 'translate-x-5 bg-indigo-600' : 'translate-x-0 bg-white'
                    } pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out`}
                  >
                    {darkMode ? (
                      <Moon className="h-3 w-3 text-white absolute top-1 left-1" />
                    ) : (
                      <Sun className="h-3 w-3 text-gray-400 absolute top-1 left-1" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Security</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Change Password</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Current Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">New Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="mt-1 text-sm text-gray-500">Add an extra layer of security to your account</p>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Workspace Settings */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Workspace Settings</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Workspace Name</label>
                  <input
                    type="text"
                    defaultValue="My Workspace"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Timezone</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Pacific Time (PT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Billing</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Current Plan</h3>
                  <div className="mt-2 flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Professional Plan</p>
                      <p className="text-sm text-gray-500">$29/month</p>
                    </div>
                    <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                      Change Plan
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
                  <div className="mt-2 flex items-center">
                    <CreditCard className="h-8 w-8 text-gray-400" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/24</p>
                    </div>
                    <button className="ml-auto px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}