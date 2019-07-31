import {Component, OnInit, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit  {
  data;
  menuIsOpen = false;
  openMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  ngOnInit() {
    this.data = [
      {
        name: 'Rima',
        surName: 'Shahbazyan',
        specialization: 'null',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rosie',
        surName: 'Tunyan',
        specialization: 'null',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Sargsyan',
        specialization: 'Dermatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Babayan',
        specialization: 'Hyperbaric',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rima',
        surName: 'Darbinyan',
        specialization: 'Cardiologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Edgar',
        surName: 'Sargsyan',
        specialization: 'Colon',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Darbinyan',
        specialization: 'Cardiologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Avetyan',
        specialization: 'Hepatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Papikyan',
        specialization: 'Oncologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Mane',
        surName: 'Manukyan',
        specialization: 'Sleep',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Emma',
        surName: 'Avetisyan',
        specialization: 'Sleep',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Mane',
        surName: 'Babayan',
        specialization: 'Gynecologic',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Avetisyan',
        specialization: 'Cardiologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Babayan',
        specialization: 'Otolaryngologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Edgar',
        surName: 'Avetyan',
        specialization: 'Dermatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Darbinyan',
        specialization: 'Surgeon',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Khachatur',
        surName: 'Papikyan',
        specialization: 'Adolescent',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Manukyan',
        specialization: 'Occupational',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Mirakyan',
        specialization: 'Dermatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rima',
        surName: 'Darbinyan',
        specialization: 'Oral',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Erik',
        surName: 'Avetisyan',
        specialization: 'Pediatrician',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Avetyan',
        specialization: 'Reproductive',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Edgar',
        surName: 'Mirakyan',
        specialization: 'Plastic',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rosie',
        surName: 'Sargsyan',
        specialization: 'Neurologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Karapetyan',
        specialization: 'Endocrinologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Papikyan',
        specialization: 'Allergist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Avetisyan',
        specialization: 'Gynecologic',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Darbinyan',
        specialization: 'Dermatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Armen',
        surName: 'Avetyan',
        specialization: 'Sleep',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Erik',
        surName: 'Mirakyan',
        specialization: 'Pain',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Avetyan',
        specialization: 'Sports',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Mane',
        surName: 'Tunyan',
        specialization: 'Cardiac',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Avetisyan',
        specialization: 'Hematologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Avetisyan',
        specialization: 'Psychiatrist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Karapetyan',
        specialization: 'Infectious',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rima',
        surName: 'Papikyan',
        specialization: 'Obstetrician',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Avetyan',
        specialization: 'Forensic',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Emma',
        surName: 'Mirakyan',
        specialization: 'Physiatrist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rosie',
        surName: 'Darbinyan',
        specialization: 'Psychiatrist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Mirakyan',
        specialization: 'Dermatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Manukyan',
        specialization: 'Nephrologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Papikyan',
        specialization: 'Interventional',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Darbinyan',
        specialization: 'Oral',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Erik',
        surName: 'Karapetyan',
        specialization: 'Interventional',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Shushan',
        surName: 'Mirakyan',
        specialization: 'Oral',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Avetyan',
        specialization: 'Oral',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Babayan',
        specialization: 'Radiologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Darbinyan',
        specialization: 'Obstetrician',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Edgar',
        surName: 'Babayan',
        specialization: 'Radiation',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Darbinyan',
        specialization: 'Radiologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Emma',
        surName: 'Mirakyan',
        specialization: 'Ophthalmologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Mirakyan',
        specialization: 'Addiction',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Erik',
        surName: 'Sargsyan',
        specialization: 'Family',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Rafael',
        surName: 'Karapetyan',
        specialization: 'Cardiovascular',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Erik',
        surName: 'Sargsyan',
        specialization: 'Pathologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Qnarik',
        surName: 'Darbinyan',
        specialization: 'Perinatologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Emma',
        surName: 'Mirakyan',
        specialization: 'Hematologist',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Armen',
        surName: 'Darbinyan',
        specialization: 'Emergency',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      },
      {
        name: 'Davit',
        surName: 'Manukyan',
        specialization: 'Radiation',
        description: 'Lorem Ipsum abracadraba bla bla bla.',
        selected: false,
        deleted: false
      }];
  }

}
