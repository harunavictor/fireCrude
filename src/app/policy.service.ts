import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}
createPolicy(Policy:Policy){
return this.firestore.collection('policies').add(Policy)
}

updatePolicy(policy:Policy){
  delete policy.id;
  return this.firestore.doc('policies/' + policy.id).update(policy)
}
deletePolicy(policyId:string){
this.firestore.doc('policy/' + policyId).delete();
}
}
