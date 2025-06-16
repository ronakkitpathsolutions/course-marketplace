const LandingPage = async ({ params }) => {
    const { slug } = await params;
    return <div>Landing Page for {slug}</div>
}

export default LandingPage;