import Layout from '../components/Layout.js'
import Pageheader from '../components/Pageheader.js'

export default function Guild() {
  return (
    <Layout
      pageTitle="RAD Partnerships"
      pageLink="/partner"
      description="Join incredible partners like Electronic Arts, Jagex, Columbia Records, Dream, and more! Rise Above The Disorder partners with teams all over the world to make mental health care accessible to all."
      pageHeader={
        <section>
          <Pageheader
            subheader="the guild"
            headerone="Give monthly"
            charone="&amp;"
            headertwo="Provide therapy to thousands"
            chartwo="♡"
          />
        </section>
      }
    ></Layout>
  )
}
