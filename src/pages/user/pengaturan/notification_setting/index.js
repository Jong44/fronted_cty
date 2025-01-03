import React from 'react'

const NotificationSetting = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 border-b pb-2">NOTIFICATION</h1>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Notify me when :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Daily Product Update</li>
              <li>Another Device Login to My Account</li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">
              Desktop Notification
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={desktopNotification}
                onChange={() => setDesktopNotification(!desktopNotification)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500"></div>
              <div
                className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"
                ></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-800">Email Notification</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotification}
                onChange={() => setEmailNotification(!emailNotification)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500"></div>
              <div
                className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"
              ></div>
            </label>
          </div>
        </div>
        <button
          className="mt-6 text-blue-600 font-medium hover:underline"
          onClick={() => console.log("Back button clicked")}
        >
          &lt; Back
        </button>
      </div>
    </div>
  );
}

export default NotificationSetting