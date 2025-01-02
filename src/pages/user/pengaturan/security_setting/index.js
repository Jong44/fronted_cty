import Head from 'next/head';
import React, { useState } from 'react';
import RootLayout from '@/components/global/layout/RootLayout';
import { createClient } from '@supabase/supabase-js';
import { alertSuccess } from '@/utils/callAlert'; // Pastikan Anda memiliki fungsi ini untuk menampilkan alert

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SecuritySetting = () => {
  const [recentPassword, setRecentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi password baru dan konfirmasi
    if (newPassword !== confirmPassword) {
      setError("Password baru dan konfirmasi tidak cocok");
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Mendapatkan user yang sedang login
      const { data: { user }, error: userError } = await supabase.auth.getUser ();

      if (userError || !user) {
        throw new Error("Pengguna tidak ditemukan. Silakan login kembali.");
      }

      // Verifikasi password saat ini
      const { error: verifyError } = await supabase.auth.signInWithPassword({
        email: user.email, // Menggunakan email pengguna yang sudah login
        password: recentPassword,
      });

      if (verifyError) {
        throw new Error("Password saat ini salah");
      }

      // Mengubah password
      const { error: updateError } = await supabase.auth.updateUser ({
        password: newPassword,
      });

      if (updateError) {
        throw new Error("Gagal mengubah password: " + updateError.message);
      }

      alertSuccess('Password berhasil diubah');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Account Setting</title>
      </Head>
      <RootLayout>
        <div className="px-7 py-10">
          <h1 className="text-left mb-5 text-3xl font-bold py-3">Change Password</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form className="space-y-5 w-full" onSubmit={handleChangePassword}>
            <div>
              <label htmlFor="recent" className="block font-bold mb-2 text-lg py-1">Your recent password</label>
              <input 
                className="border border-black rounded-lg w-full p-3 text-sm" 
                type="password" 
                id="recent" 
                name="recent" 
                placeholder="Recent password"
                value={recentPassword}
                onChange={(e) => setRecentPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="new" className="block font-bold mb-2 text-lg py-1">Your new password</label>
              <input 
                className="border border-black rounded-lg w-full p-3 text-sm" 
                type="password" 
                id="new" 
                name="new" 
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newpass" className="block font-bold mb-2 text-lg py-1">Confirm your new password</label>
              <input 
                className="border border-black rounded-lg w-full p-3 text-sm" 
                type="password" 
                id="newpass" 
                name="newpass" 
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right py-10">
              <button 
                type="submit" 
                className="bg-blue-800 text-white font-bold px-8 py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? 'Updating...' : 'UPDATE'}
              </button>
            </div>
          </form>
        </div>
      </RootLayout>
    </>
  );
};

export default SecuritySetting;