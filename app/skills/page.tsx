export default function Skills() {
    return (
        <div>
            <div className="mb-8 text-2xl font-semibold">My Skills</div>

            <div className="mb-4">
                <div className="mb-2 font-semibold">Programming Languages</div>
                <div className="mb-4">
                    <ul className="list-disc list-inside">
                        <li>Java</li>
                        <li>TypeScript / JavaScript</li>
                        <li>Lua</li>
                    </ul>
                </div>
            </div>

            <div className="mb-4">
                <div className="mb-2 font-semibold">Frameworks</div>
                <div className="mb-4">
                    <ul className="list-disc list-inside">
                        <li>Spring Boot</li>
                        <li>Playwright</li>
                    </ul>
                </div>
            </div>

            <div className="mb-4">
                <div className="mb-2 font-semibold">Technologies and Tools</div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Docker</li>
                        <li>Git</li>
                        <li>Postman</li>
                        <li>Linux</li>
                        <li>Windows Server</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
