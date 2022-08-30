import { useState } from 'react'
import AdminLayout from '@/components/template/AdminLayout'
import Contacts from '@/components/pages/Admin/Contacts'
import Foods from '@/components/pages/Admin/Foods'
import Users from '@/components/pages/Admin/Users'
const Admin = () => {
    const [title, setTitle] = useState('お問い合わせ一覧')
    console.log(title)

    return (
        <AdminLayout setTitle={setTitle} title={title}>
            {title === 'お問い合わせ一覧' && <Contacts />}
            {title === '食材一覧' && <Foods />}
            {title === 'ユーザー一覧' && <Users />}
        </AdminLayout>
    )
}

export default Admin
