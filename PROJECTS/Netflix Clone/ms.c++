#include <bits/stdc++.h>
using namespace std;

int main() {
    // your code goes here
    int t1;
    cin>>t1;
    while(t1--){
        int num, x, y;
        cin>>num>>x>>y;
        vector<int> v;
        for(int i=0; i<num; i++){
            int omg;
            cin>>omg;
            v.push_back(omg);
        }
        int result = 0;
        for(int i=0; i<num; i++){
            result += min(v[i] * x, y);
        }
        
        cout<<result<<endl;
    }
}