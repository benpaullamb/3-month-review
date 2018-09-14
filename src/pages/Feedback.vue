<template>
    <page title="Feedback">
        <content-panel title="ACE Feedback" anim="slideInLeft">
            <div class="images">
                <img src="../images/christian-profile.jpeg" alt="Christian Allen" @click="selectFeedback('christian');">
                <img src="../images/sofia-profile.jpeg" alt="Sofia Hurst" @click="selectFeedback('sofia');">
                <img src="../images/sean-profile.jpeg" alt="Sean Fackrell" @click="selectFeedback('sean');">
            </div>

            <div v-show="selectedFeedback === 'christian'" id="christian">
                <h3>Christian Allen</h3>
                <p>
                    Ben has really impressed since joining the team.  
                    He already had a good amount of technical experience before starting his 
                    internship but has built on that and grown rapidly since then. <br><br>

                    He has quickly picked up the Architect Decision Points Tool project and has 
                    been able to build out a high quality result that works well and closely 
                    matches the designs, all in a short space of time. <br><br>

                    More generally, Ben has been very curious and has sought to understand how and 
                    why things work the way they do - which is an excellent attitude to have as a 
                    developer.  This has allowed him to learn a range of web development skills 
                    quickly (including ES6 JavaScript and Vue).  He also has shown a desire to do 
                    things properly and 'the right way' - which again will stand him in good stead 
                    going forwards. <br><br>

                    Looking ahead, I would strongly recommend Ben to make the most of the 
                    opportunity to learn from others in the team and push himself to build to a 
                    high quality.  He should be open to new ideas and approaches as he comes across 
                    them.  He should also seek out opportunities to work with clients and engage 
                    with various parts of IBM for experience in communication and building 
                    relationships.  If he makes sure that he keeps on learning - whether it be by 
                    tackling a new framework or language, or delving into architecture or design, 
                    he can continue improving at a high rate. 
                </p>
            </div>

            <div v-show="selectedFeedback === 'sofia'" id="sofia">
                <h3>Sofia Hurst</h3>
                <p>
                    You've been really good fun to be around and a real help when things got difficult 
                    during the grad's extended Digital Skills Academy project. You have always been 
                    approachable for help when we got stuck (which happened to be often) and really 
                    helped us get going with the database integration. Even when we asked you about 
                    things you didn't know, you would spend some time trying to figure things out 
                    which we really appreciated.<br><br>

                    Thank you again for all your help
                </p>
            </div>

            <div v-show="selectedFeedback === 'sean'" id="sean">
                <h3>Sean Fackrell</h3>
                <p>
                    It was great working with you on the DSA Micro-Project.<br><br>

                    Your contributions helped the application work the way we wanted.<br><br>

                    You were instrumental in making the front end functional and look good in the 
                    process plus you set up the Cloundant integration into node red that I struggled 
                    to get working.<br><br>

                    You contributed more than anyone could have asked and made suggestions that made 
                    the application even more user friendly.<br><br>

                    I also learned a lot from you in the process and hope I have the chance to work 
                    with you again at some point...
                </p>
            </div>
        </content-panel>
        <content-panel title="Worries" anim="slideInRight">
            <ul>
                <li><i class="fas fa-code"></i>Talking to clients – not knowing answers to their questions/contributing to discussions/seeming incompetent</li>
                <li><i class="fas fa-code"></i>Not understanding the business jargon or concepts for a project at all/quickly enough</li>
                <li><i class="fas fa-code"></i>Having to go and work on a client site</li>
                <li><i class="fas fa-code"></i>A system I’ve made for a client failing</li>
                <li><i class="fas fa-code"></i>Black bears</li>
                <li><i class="fas fa-code"></i>Presenting</li>
                <li><i class="fas fa-code"></i>Asking for help too frequently</li>
            </ul>
        </content-panel>
    </page>
</template>

<script>
import Page from '../Components/Page.vue';
import ContentPanel from '../Components/ContentPanel.vue';

export default {
    components: {
        Page,
        ContentPanel
    },
    data() {
        return {
            selectedFeedback: 'christian'
        }
    },
    methods: {
        selectFeedback(person) {
            this.selectedFeedback = person;
        }
    }
}
</script>


<style lang="scss" scoped>
$ibm-blue-50: #2d74da;

.images {
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;

    img {
        border-radius: 100%;
        width: 50px;
        margin-right: 1rem;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 2px 2px $ibm-blue-50;
        }
    }
}

li {
    margin-bottom: 5%;
}
</style>