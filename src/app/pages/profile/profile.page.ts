import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController, NavParams } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
//import { auth } from 'firebase';
//import { } from 'src/app/main';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { UserService } from '../user.service';

//@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');
  // }

  crateProfile() {
    const user = this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
        .then(() => {
          //this.navCtrl.set('HomePage')
        })
    })
  }

}
