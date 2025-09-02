import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { name, email, phone, device } = await req.json()

        const res = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "api-key": process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify({
                email,
                attributes: {
                    NAME: name,
                    PHONE: phone,
                    DEVICE_TYPE: device,
                },
                listIds: [4],
                updateEnabled: true,
            }),
        })

        if (!res.ok) {
            const error = await res.json()
            console.error("Brevo API error:", error)
            return NextResponse.json({ error: "Failed to add contact" }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Server error:", error)
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}
