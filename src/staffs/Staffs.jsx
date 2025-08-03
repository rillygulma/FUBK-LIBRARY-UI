import StaffCard from './StaffCard';
import UL from '../assets/UL.jpg';
import Rilwanu from '../assets/Slack-Img.jpg';
import Reader_Services from '../assets/Musa Kaystal.jpg';
import ICT_Librian from '../assets/Mubarak.JPG';
import Prossing_Librian from '../assets/John.JPG';
import HeadOfCOHS from '../assets/Zubairu.jpeg';
import hassan from '../assets/Hassan.jpeg';
import usman from '../assets/usman.jpeg';




const Staffs = () => {
  return (
    <div className="flex flex-col items-center mt-40 px-4 lg:px-24 bg-gray-100 p-6 rounded-lg">
      <StaffCard
        imgSrc={UL}
        name={"Prof. Ahmad Audu Balarabe CLN, FNLA"}
        position={"The University Librarian"}
        bio={
          "Prof. Ahmad Balarabe is a Professor of Library and Information science at Usmanu Danfodiyo University sokoto(UDUS). He was born in 17th March, 1958, and is married with children.  He was the Ag. University Librarian in UDUS and later substantive University Librarian of the institution, from 1998 to 2007 and from 2007 to 2017 respectively. After the completion  of his primary and secondary school in 1972 to 1976, respectively, Prof. Balarabe proceeded to the college of Arts, Science and Technology, Zaria from 1977 to 1979. Thereafter, he attended Ahmadu Bello University Zaria from 1979 to 1982, where he obtain Bachelor of Library Science (BLS) plus Graduate Certificate in Education.  He also obtain Masters in Library Science (MLS) from the same institution in 1987.  Prof. Balarabe attended the international Graduate Information studies school, College of Librarianship, Aberystwyth University  wales, UK in 1990. He obtains his Ph.D at Usmanu Danfodiyo University sokoto in 2005. Prof.  Balarabe joined the service of Usmanu Danfodiyo University sokoto  as a Graduate Assistance in December 1983, where he rose through the ranks to become professor of Library and information science in 2011. Prof. Balarabe a veteran University Librarian of high repute.  He is a chartered Librarian and Fellow of the Nigerian Library Association (FNLA). For 13 years, he had been the Chairman of the Sokoto State Chapter of the Association and Zonal Overseer of the sokoto,Kebbi, Zamfara state chapter. Prof. Balarabe is a member of national executive Committee/Council and Chairman/Member of various strategic Committees a well as the Editor-in-Chief of the Associations official journal (Nigeria Libraries)."
        }
      />
      <StaffCard
        imgSrc={Reader_Services}
        name={"Musa Bako Katsayal"}
        position={"Reader Services Librarian"}
        bio={
          "This section is responsible for the registration of all Library users, including staff and students. It is mandatory for every student to register with the Library immediately after his/her central registration. This will allow him access to the resources, facilities and services of the Library. Other important functions of this section include: clearance of students on completion of their study programmes; lending of books to borrowers and retrieval of same upon return; orderly arrangement of books on the shelves on daily basis; guidance to users; and ensuring orderly conduct by users while in the Library. All enquiries pertaining to the use of the Library resources and services are referred to the Reader's Services Librarian or staff in this section."
        }
      />
      <StaffCard
        imgSrc={HeadOfCOHS}
        name={"Umar Zabairu Zauro "}
        position={"Head Of Take-OFF And COHS Medical Library"}
        bio={
          "The Head of Take-OFF and COHS Medical Library is responsible for overseeing the administration, operations, and development of both the Take-OFF Library and the College of Health Sciences (COHS) Medical Library. They ensure efficient delivery of library services, manage staff, develop medical and academic collections, support research and teaching needs of students and faculty, implement library policies, and promote access to digital and print resources in health and medical sciences."
        }
      />
      <StaffCard
        imgSrc={ICT_Librian}
        name={"Mubarak Aliyu"}
        position={"ICT Librarian"}
        bio={
          "This is concerned with the provision of information services using modern technologies, such as the Internet, computers, CDs, etc. It is in-charge of the ELibrary operation and services, electronic resources and databases, digitization, institutional repository, etc. All requests/issues relating to electronic resources or databases are referred to the ICT Librarian or staff in the section. Students are strongly advised to make best use of the facilities available for academic and research purposes only."
        }
      />
      <StaffCard
        imgSrc={hassan}
        name={"Hassan Idris"}
        position={"Collection Development Librarian"}
        bio={
          "This particular section is specifically in-charge of the acquisition of books and other related materials needed for teaching, learning and research in the University. The section routinely collects requests/recommendations from faculties, departments and individual bonafide users (staff and students) and acquires the  materials recommended"
        }
      />
      <StaffCard
        imgSrc={Prossing_Librian}
        name={"Yahaya Abdulkareem"}
        position={"Processing Librarian"}
        bio={
          "The primary function of this section is to process all the books and other materials acquired by the Library in order to ensure easy access, retrieval and use by users. This is achieved through cataloguing and classification of the acquired materials as well as maintenance of the Open Public Access Catalogue (OPAC), which is a key to the entire collections of the Library."
        }
      />
      <StaffCard
        imgSrc={usman}
        name={"Usman Ibrahim"}
        position={"Head of Research & Bibliography/ Document and Africana"}
        bio={
          "The Head of Research & Bibliography/Document and Africana is responsible for managing research support services, developing bibliographic tools, organizing and preserving documentary resources, and curating Africana collections. This role involves assisting researchers with specialized information needs, compiling bibliographies, maintaining archives and rare materials related to African studies, and promoting access to indigenous knowledge, historical documents, and scholarly resources relevant to Africa."
        }
      />
      <StaffCard
        imgSrc={Rilwanu}
        name={"Rilwanu Idris"}
        position={"System Analysist"}
        bio={""}
      />
      {[...Array(8)].map((_, index) => (
        <StaffCard key={index} />
      ))}
    </div>
  );
};

export default Staffs;
