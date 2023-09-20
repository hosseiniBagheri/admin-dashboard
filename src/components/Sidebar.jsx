import { ArrowUpIcon, BellIcon, ChartBarIcon, CreditCardIcon, DocumentSearchIcon, ExternalLinkIcon, HomeIcon, MailIcon, MoonIcon, SunIcon } from "@heroicons/react/solid"


const Sidebar = ({ theme, setTheme }) => {
    return (
        <div className="bg-white dark:bg-slate-800 flex-none w-14 sm-w-20 h-screen">
            <div className="flex items-center justify-center h-20">
                <HomeIcon width={40} className="text-gray-700 dark:text-gray-300 fixed" />
            </div>
            <div className="fixed left-2 top-[100px]">
                <ChartBarIcon
                    width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
                <DocumentSearchIcon
                    width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
                <MailIcon
                    width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
                <CreditCardIcon
                    width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
                <BellIcon
                    width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
            </div>
            <div className="fixed bottom-1 left-2">
                {theme === "light" ? (
                    <MoonIcon onClick={() => setTheme("dark")} width={40}
                        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                    />
                ) : (
                    <SunIcon onClick={() => setTheme("light")} width={40}
                        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                    />
                )}
                <a href="#top">
                    <ArrowUpIcon width={40}
                        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                    />
                </a>
                <ExternalLinkIcon width={40}
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg mb-4 text-gray-600 cursor-pointer dark:text-gray-300"
                />
            </div>
        </div >
    )
}

export default Sidebar