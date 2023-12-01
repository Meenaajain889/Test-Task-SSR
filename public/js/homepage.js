const submitBtn = document.getElementById("submitText")

const handleAddText = async () => {
    const value = document.getElementsByClassName("text-box")[0].value
    console.log("this si the value", value)
    try {
        const res = await fetch("/value", { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify({ value }) })
        const parsedRes = await res.json()
        if (parsedRes) location.reload()
    } catch (err) {
        console.log(err, "error getting in getValue")
    }
}

submitBtn.addEventListener("click", (event) => {
    handleAddText()
})
