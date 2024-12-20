function getToday() {
    return new Date().toISOString().split('T')[0];
}

const post = [

    {
        name: 'Hong Kong-Taiwan Mission opens',
        date: '1970-12-11',
		description: 'The Hong Kong-Taiwan mission is opened with Malan R. Jackson was the first president. After a year of rapid growth the Mission was Reorganized in January 1971 to be the Taiwan Mission making it the 93rd Mission of the church. Which had 4,500 members, 90 missionaries, and 50 convert baptisms each month on average. The exciting atmosphere lead to many young Taiwanese and Chinese members serving missions. Image on the left is President Jackson and his family which served alongside him in Taiwan. There are now two missions in Taiwan, based in Taipei and Taichung, there are 16 stakes iwth 99 congregations and a temple located in Taipei completed in 1984. Total Church membership is currenttly 62,390 members.',
		image: './assets/jacksonfam.jpeg',
        publishDate: '2024-12-11',
        source: 'Brigham Young University',
        referenceLink: 'https://rsc.byu.edu/sites/default/files/pub_content/pdf/A_Firm_Foundation.pdf'
	},
    {
        name: 'The Hawaiian Islands Mission opens',
        date: '1850-12-12',
		description: 'The Sandwich Islands mission as it was then known opens. Hiram Clarck is called to be the first president, this was the 10th mission in operation. There are now two missions in Hawaii, the Hawaii Laie and Hawaii Honolulu Missions. By 1854, there were over 4,000 Hawaiian converts in 53 branches scattered throughout the islands, the Book of Mormon had been translated into Hawaiian, and converts gathered to a colony on Lanai. There are currently 16 stakes, 143 congretations, 2 temples and an astounding 75,635 total church membership in the Hawaiian Islands.',
		image: './assets/Kalaupapa.jpg',
        publishDate: '2024-12-12',
        source: 'Brigham Young University',
        referenceLink: 'https://history.churchofjesuschrist.org/chd/organization/mission/hawaiian-1850?timelineTab=all-events&lang=por#:~:text=The%20first%20branch%20in%20the,to%20a%20colony%20on%20Lanai.'
	},
    {
        name: 'Welsh Mission opens',
        date: '1845-12-15',
        description: 'Organzied from the already successful British mission in 1845. The First president of the mission was Dan Jones a legendary missionary known for his boldness in sharing his testimony of the Restored Gospel. Dan grew up in Wales and later left to sail the sea as a mariner. Dan Later moved to America and worked as a steamboat captain on the Mississippi river, this is where he was exposed to the church. He was baptised in 1843 and went to Carthage Jail with the prophet Joseph Smith in the summer of 1844. Dan was not afraid to die for his beliefs but Joseph prophesied that Dan would yet see Wales again as a missionary, this came true several months later as Dan and his wife Jane left for Wales. The offical Welsh mission was later absolved back into the British mission due to widespread opposition, and significant emigration to the United States.',
        image: './assets/danjones.jpeg',
        publishDate: '2024-12-15',
        source: 'Church of Jesus Christ of Latter-Day Saints',
        referenceLink: 'https://www.churchofjesuschrist.org/study/history/global-histories/wales/stories-of-faith/wa-02-dan-jones?lang=eng'
    },
    {
        name: 'Section 101 of the Doctrine and Covenants revealed.',
        date: '1833-12-16',
        description: 'On a cold December day while Joseph Smith was in Kirtland Ohio, the problem he faced was an unending tidal wave of persecution for the saints in Missouri who had been forcibly driven from their homes after peacefully trying to establish homes. In this section the Lord counsels that His followers must be chastened at times like Abraham once was when commanded to offer up his only son. The Lord speaks peace to His people saying that " all they who have mourned shall be comforted." (v.14). The Lord further comforts His people in verse 16; "Therefore, let your hearts be comforted concerning Zion; for all flesh is in mine hands; be still and know that I am God." That promise is well known throughout the church and has been a comfort to members all across the globe. ',
        image: './assets/d&c101.jpg',
        publishDate: '2024-12-16',
        source: 'Church of Jesus Christ of Latter-Day Saints',
        referenceLink: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/101?lang=eng'
    },
    {
        name: 'Porto Alegre Brazil Temple is dedicated by President Gordon B. Hinckley.',
        date: '2000-12-17',
        description: 'After three years of excited labor the 102nd Temple of the Church and the third temple to be built in Brazil was dedicated twenty-four years ago today. President Gordon B. Hinckley offered the dedicatory prayer. The temple walls were built with cotton white granite from the Ceara State of Brazil.',
        image: './assets/portoalegre.webp',
        publishDate: '2024-12-17',
        source: 'Church of Jesus Christ Temples',
        referenceLink: 'https://churchofjesuschristtemples.org/porto-alegre-brazil-temple/'
    },
    {
        name: 'Joseph Smith Jun. gives the first patriarachal blessing of this dispensation in Kirtland at the Johnson Inn.',
        date: '1833-12-18',
        description: 'This day marks when Joseph Smith gave the first patriarchal blessing of this dispensation to his father Joseph Smith Sr. and then ordained him to be the first Patriarch of the church. And office that Joseph Sr. held until his death in late 1840. A patriarchal blessing is a blessing given by inspired direction from the Lord through a local stake patriarch. The blessing declares the member\'s lineage in the house of Israel and includes personal counsel and direction from God. Any member of the church may receive on when they feel like they are ready and desire to learn more from the Lord.',
        image: './assets/js-sr.jpg',
        publishDate: '2024-12-18',
        source: 'Church of Jesus Christ of Latter-Day Saints',
        referenceLink: 'https://history.churchofjesuschrist.org/blog/a-history-of-patriarchs-and-patriarchal-blessings?lang=eng'
    },
    {
        name: 'The government of Kazakhstan formally recognizes the Church of Jesus Christ of Latter-Day Saints.',
        date: '2000-12-19',
        description: 'A republic formally a part of the Soviet Union, recognized the Church this day twenty-four years ago. Since the first baptisms in 1999, the church has grown to three congregations with a total membership of 218 members. Kazakhstan is currently a part of the Central Eurasia Mission. Image to the left shows a visit by Elder Cook to the Almaty Kazakhstan branch. Credit kazahkwak.',
        image: './assets/kazahkstan.webp',
        publishDate: '2024-12-19',
        source: 'Church of Jesus Christ of Latter-Day Saints Newsroom',
        referenceLink: 'https://newsroom.churchofjesuschrist.org/facts-and-statistics/country/kazakhstan#:~:text=The%20Church%20received%20official%20recognition,Almaty%20on%20July%2029%2C%202001.'
    },
    // adding new story of the day
    {
        name: 'The Mozambique Biera Mission is opened, an offshoot of the South Afrixa Johannesburg Misison, with Nilson J. Moraes acting as President',
        date: '2004-12-20',
        description: 'The church was properly recognized by the governmant in 1996. In a period of rapid growth there have been seven stakes, two districts and a total of 69 congregations, with a total of 24,733 members. A temple was announced in 2021 to be located in Beira A second mission is opened the spring of 2021 based in Maputo. The image on the left is of missonaries who are from Mozambique and nearby countries serving in the Mozambique Mission.',
        image: './assets/MZ.png',
        publishDate: '2024-12-20',
        source: 'Church of Jesus Christ of Latter-Day Saints Global Histories',
        referenceLink: 'https://www.churchofjesuschrist.org/study/history/global-histories/mozambique/mz-chronology?lang=eng'
    }

];

console.log("Today's Date:", getToday());


export default post


