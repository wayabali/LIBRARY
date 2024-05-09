import ListCrew from "./CrewList.jsx";
import  "./Rectangle.css";
export default function Rectangle() {
  return (
    <>
      <div className="rectangle">
        <div  className="HP-rectangle" />
        <h3 className="font-titan-one-rectangle">About us</h3>

        <p className="font-rectangle">
          We are six computer science students who aimed to built a web-site
          accessible to all book lovers out there. As our second year project,
          our goals were <b>simplicity</b>, <b>efficiency</b> and{" "}
          <b>inclusivity</b>. all the while keeping an aesthetically pleasing
          theme where everyone can find their peace of mind while grabbing a
          book to page. We thank you greatly for being an important part of this
          project in hopes to see more works done by our wonderful team.
        </p>

        <div className="crew-rectangle">
          <h3 className="font-titan-one3-rectangle">Crew</h3>
          <ListCrew />
        </div>
        <div className="contact-rectangle">
          <h3 className="font-titan-one2-rectangle">Contact us</h3>
          <p className="font-mail-rectangle">
            <a
              href={`mailto:fikalibrary24@gmail.com?subject=${encodeURIComponent(
                "Feedback or Inquiry"
              )}`}
            >
              fikalibrary24@gmail.com
            </a>
          </p>
          <div  className="EL1-rectangle" />
          <div  className="EL2-rectangle" />
        </div>
      </div>
    </>
  );
}