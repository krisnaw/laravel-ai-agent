import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Direct messages',
        href: '/briefs/index',
    },
];

interface User {
    id: number;
    name: string;
    unread: boolean;
}

export default function Index({users} : {users: User[]}) {
    console.log(users);


    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(users);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Direct messages" />
            <div>
                <div className="flex h-screen bg-gray-100">
                    {/* Conversations List */}
                    <div className="w-1/3 bg-white border-r border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-800">Chats</h1>
                            <div className="mt-4 relative">
                                <Input
                                    type="text"
                                    placeholder="Search Messenger"
                                    className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>
                        <ScrollArea className="h-[calc(100vh-88px)]">
                            {users.map((conversation, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                                        conversation.unread ? "bg-blue-50" : ""
                                    }`}
                                    onClick={onClickHandler}
                                >
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={conversation.name} />
                                        <AvatarFallback>
                                            {conversation.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 flex-grow">
                                        <div className="flex justify-between items-baseline">
                                            <h2 className="font-semibold text-gray-800">{conversation.name}</h2>
                                            <span className="text-xs text-gray-500">Time</span>
                                        </div>
                                        <p className={`text-sm ${conversation.unread ? "text-gray-800 font-semibold" : "text-gray-500"}`}>
                                            Convo
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
